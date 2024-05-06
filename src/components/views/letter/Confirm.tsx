/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/navigation';
import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';

import { ConfirmLetterData } from '@/type/letterData';
import LetterHeader from '@/components/letter/LetterHeader';
import { letterIdState, usePointState } from '@/recoil/letter/atom';
import { tokenAtom } from '@/recoil/auth/atom';

import LetterBottom from '@/components/letter/LetterBottom';
import { addComma } from '@/common/util';

import { styles } from './Confirm.styles';

interface Params {
  letterId: string;
}

const Confirm = ({ params }: { params: Params }) => {
  const router = useRouter();
  const letterId = parseInt(params.letterId);
  const [sendLetterId, setSendLetterId] = useRecoilState(letterIdState);
  const [totalCost, setTotalCost] = useState(0);
  const [usePoint, setUsePoint] = useRecoilState(usePointState);
  const token = useRecoilValue(tokenAtom);
  const [confirmData, setConfirmData] = useState<ConfirmLetterData>();
  const [modalOpen, setModalOpen] = useState(false);
  const inputPoint = Number(usePoint);

  useEffect(() => {
    const fetchData = async () => {
      if (token && letterId) {
        const response = await axios.get(
          `/letter/confirm?letterId=${letterId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setConfirmData(response.data.data);
        setSendLetterId(letterId);
        setTotalCost(response.data.data.totalCost);
      }
    };

    fetchData();
  }, [token, letterId]);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  const contentDataLength = confirmData?.contents.length;
  const photoUrl = confirmData?.photos;

  const stampNames: { [key: number]: string } = {
    1: '일반우표',
    2: '등기우표',
    3: '준등기우표',
    4: '특급우표',
  };

  /** 결제예정금액 */
  const billingAmount = inputPoint >= 1 ? totalCost - inputPoint : totalCost;

  const handleUsePointChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputPoint = Number(e.target.value);
      const maxPoint = confirmData?.point;

      const maxInputPoint = Math.min(maxPoint ?? Infinity, totalCost);

      if (inputPoint > maxInputPoint) {
        setUsePoint(maxInputPoint);
      } else {
        setUsePoint(inputPoint);
      }
    },
    [setUsePoint, confirmData?.point, totalCost]
  );

  const onClickNext = () => {
    router.push(`/letter/payment`);
  };

  return (
    <>
      <LetterHeader />
      <div css={styles.Wrap}>
        {confirmData ? (
          <div>
            <div css={styles.Section}>
              <h1 css={styles.Title}>주문서</h1>
              <div css={styles.Contents}>
                <img
                  src={confirmData.writingPadImgUrl}
                  css={styles.LetterImg}
                />
                <div css={styles.InfoLetter}>
                  <div>
                    <p css={styles.UserSelect}>작성한 편지지</p>
                    <p>{contentDataLength}장</p>
                  </div>
                  <div>
                    <p css={styles.UserSelect}>선택한 우표</p>
                    <p>{stampNames[confirmData?.stampId]}</p>
                  </div>
                  <div>
                    <p css={styles.UserSelect}>주소</p>
                    <div css={styles.AddressList}>
                      <div>
                        <p css={styles.AddressPart}>받는 사람</p>
                        <p>{confirmData.deliveryName}</p>
                        <p>
                          {confirmData.deliveryPostCode}{' '}
                          {confirmData.deliveryAddress}
                        </p>
                        <p>{confirmData.deliveryAddressDetail}</p>
                        <p>{confirmData.deliveryPhone}</p>
                      </div>
                      <div css={styles.Address}>
                        <p css={styles.AddressPart}>보내는 사람</p>
                        <p>{confirmData.sendName}</p>
                        <p>
                          {confirmData.sendPostCode} {confirmData.sendAddress}
                        </p>
                        <p>{confirmData.sendAddressDetail}</p>
                        <p>{confirmData.sendPhone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div css={styles.Section}>
              <h1 css={styles.Title}>보낼 사진</h1>
              <div css={styles.Contents}>
                <div css={styles.PhotoContainer}>
                  {photoUrl && photoUrl.length > 0 ? (
                    photoUrl.map((photo, index) => (
                      <img
                        key={index}
                        css={styles.PhotoImg}
                        src={photo.photoUrl}
                        alt={`photo-${index}`}
                      />
                    ))
                  ) : (
                    <p>추가한 사진이 없습니다.</p>
                  )}
                </div>
              </div>
            </div>
            <div css={styles.Section}>
              <p css={styles.Title}>결제 예정 금액</p>
              <div css={styles.Contents}>
                <div css={styles.PointInfo}>
                  <div>
                    <p>보유 포인트</p>
                    <p>{addComma(confirmData.point)} 포인트</p>
                  </div>
                  <div>
                    <p>사용할 포인트</p>
                    <input
                      type='number'
                      css={styles.UsePoint}
                      value={usePoint.toString()}
                      onChange={handleUsePointChange}
                    />{' '}
                    포인트
                  </div>
                  <div>
                    <p>결제예정금액</p>
                    <p>총 {addComma(billingAmount)}원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>잠시만 기다려주세요.</div>
        )}
      </div>
      <LetterBottom onClickNext={onClickNext} />
    </>
  );
};

export default Confirm;
