/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/navigation';
import LetterHeader from '@/components/letter/LetterHeader';
import { SetStateAction, useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';
import { styles } from './PhotoSelect.styles';
import { getPhotoData, postPhotoData } from '@/api/letter';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tokenAtom } from '@/recoil/auth/atom';
import useSWR, { mutate } from 'swr';
import { letterIdState } from '@/recoil/letter/atom';
import Image from 'next/image';
import LetterBottom from '@/components/letter/LetterBottom';
import Cropper from 'react-easy-crop';
import getCroppedImg from '@/hooks/getCroppedImg';

const PhotoSelect = ({ params }: { params: { letterId: string } }) => {
  const router = useRouter();
  const token = useRecoilValue(tokenAtom);
  const letterId = params.letterId;
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const imagesInputRef = useRef<HTMLInputElement>(null);
  const [_, setSendLetterId] = useRecoilState(letterIdState);

  const url = `letter/getPhoto?letterId=${letterId}`;
  const { data } = useSWR(url, getPhotoData, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    if (token && data) {
      setImagePreviews(data);
    }
    setSendLetterId(parseInt(letterId));
  }, [data]);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // 이미지파일 배열 상태 저장
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 이미지 인덱스
  const [currentImage, setCurrentImage] = useState(''); // 크롭할 이미지 설정

  /** 이미지 선택 */
  const handleImageSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);

      if (files.length + imagePreviews.length > 30) {
        alert('최대 30개까지 업로드할 수 있습니다.');
        return;
      }

      setSelectedFiles(files);
      processImageQueue(files, 0);
    }
  };

  /** 이미지 큐 처리 */
  const processImageQueue = (files: any, index: any) => {
    if (index < files.length) {
      const currentFile = files[index];
      const imageUrl = URL.createObjectURL(currentFile); // 현재 이미지의 URL 생성

      setCurrentImage(imageUrl);
      setCurrentImageIndex(index);
      setCropModalOpen(true);
    } else {
      setCropModalOpen(false);
      alert('사진 추가 완료');
    }
  };

  // 이미지 크롭 기능 추가
  const [cropModalOpen, setCropModalOpen] = useState(false); // 크롭 모달 표시 상태
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // 이미지 크롭 위치 변경 시 호출될 함수
  const onCropChange = useCallback(
    (crop: SetStateAction<{ x: number; y: number }>) => {
      setCrop(crop);
    },
    []
  );

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [croppedAreaPixels]
  );

  // 이미지 줌 변경 시 호출될 함수
  const onZoomChange = useCallback((zoom: SetStateAction<number>) => {
    setZoom(zoom);
  }, []);

  /** 이미지 크롭 완료 */
  const handleCropComplete = useCallback(async () => {
    // 에러 발생 시 모달 닫기
    if (!croppedAreaPixels) {
      alert('croppedAreaPixels is null');
      setCropModalOpen(false);
      return;
    }

    // 크롭 후 저장 버튼을 누르면 서버 및 S3로 이미지 데이터 업데이트
    try {
      // getCroppedImg 함수 호출
      const croppedImageUrl = await getCroppedImg(
        currentImage,
        croppedAreaPixels
      );

      if (croppedImageUrl) {
        const formData = new FormData();
        // const fileType = file.type;
        const datetime = new Date().getTime().toString();
        const newFileName = `${letterId}_${datetime}.jpeg`;

        formData.append('files', croppedImageUrl);
        formData.append('insertName', newFileName);

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_HOST}letter/upload`,
            {
              method: 'POST',
              body: formData,
              headers: {
                Authorization: `Bearer ${token?.accessToken}`,
              },
            }
          );

          const responseData = await response.json();
          const presignedUrl = responseData.data[0].preSignedUrl;
          const insertNames = responseData.data.map(
            (item: { insertName: any }) => item.insertName
          );

          fetch(presignedUrl, {
            method: 'PUT',
            body: croppedImageUrl,
            headers: {
              'Content-Type': '.jpeg',
            },
          })
            .then(async (response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              if (response.ok) {
                const photoData = {
                  letterId: letterId,
                  insertNames: insertNames,
                };

                try {
                  const response = await postPhotoData(photoData);
                  const newPhoto = response.data;

                  mutate(url);
                  processImageQueue(selectedFiles, currentImageIndex + 1);
                } catch (error) {
                  console.error('사진 업로드 중 오류 발생:', error);
                }
              } else {
                console.error('File upload failed:', response.statusText);
              }
            })
            .catch((error) => {
              console.error('Error during file upload:', error);
            });
        } catch (error) {
          console.error('파일 업로드 중 오류 발생:', error);
        }
      }
    } catch (error) {
      console.error('Failed to crop the image', error);
    }
  }, [token, croppedAreaPixels, currentImageIndex, selectedFiles]);

  /** 이미지 삭제 */
  const handleRemove = async (id: number) => {
    const deleteData = { photoId: id, letterId: letterId };
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_HOST}letter/delPhoto`, {
        method: 'POST',
        body: JSON.stringify(deleteData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token?.accessToken}`,
        },
      });
      mutate(
        url,
        data.filter((photo: { id: number }) => photo.id !== id),
        false
      );
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
    }
  };

  const onClickNext = () => {
    router.push(`/letter/send/${letterId}`);
  };

  return (
    <>
      <LetterHeader />
      <div css={styles.Wrap}>
        <div>
          <input
            type='file'
            id='file'
            multiple
            ref={imagesInputRef}
            css={styles.InputStyle}
            onChange={handleImageSelect}
            name='letter_img'
          />
          <label htmlFor='file'>
            <div css={styles.DescBox}>
              <Image
                src={'/icon/plus.png'}
                alt={'사진추가 아이콘'}
                width={20}
                height={20}
              />
              <p css={styles.RequestPhoto}>
                사진 추가
                <br />( {`${imagePreviews.length}장/ 30장`} )
              </p>
            </div>
            <p css={styles.Desc}>
              사진 크기는 일반사진(4"X6")크기로 현상 됩니다.
              <br />
              크기: 가로15cm X 세로10cm
            </p>
          </label>
        </div>
        {cropModalOpen && (
          <div css={styles.Crop}>
            <div css={styles.CropChild}>
              <div>
                <Cropper
                  image={currentImage}
                  crop={crop}
                  zoom={zoom}
                  aspect={3 / 2}
                  onCropChange={setCrop}
                  onZoomChange={onZoomChange}
                  onCropComplete={onCropComplete}
                />
                <div css={styles.CropBtns}>
                  <button
                    css={styles.CropCloseBtn}
                    onClick={() => setCropModalOpen(false)}
                  >
                    취소
                  </button>
                  <button
                    css={styles.CropCompleteBtn}
                    onClick={handleCropComplete}
                  >
                    저장
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div css={styles.PhotoList}>
          {imagePreviews.length > 0 ? (
            imagePreviews.map((preview: any) => (
              <div key={preview.id} css={styles.PhotoContainer}>
                <img
                  css={styles.PreviewImg}
                  src={preview.img_url}
                  alt='미리보기 이미지를 불러오는 중'
                />
                <img
                  css={styles.RemoveIcon}
                  src='/icon/delete.svg'
                  alt='이미지 삭제 버튼'
                  onClick={() => handleRemove(preview.id)}
                />
              </div>
            ))
          ) : (
            <div css={styles.emptyPhoto}>추가된 사진이 없습니다.</div>
          )}
        </div>
      </div>
      <LetterBottom onClickNext={onClickNext} />
    </>
  );
};

export default PhotoSelect;
