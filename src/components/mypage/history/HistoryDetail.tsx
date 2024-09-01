'use client';
/** @jsxImportSource @emotion/react */

import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import { tokenAtom } from '@/recoil/auth/atom';

import MyPageLayout from '../MyPageLayout';

import { getMyLetterHistoryDetail } from '@/api/mypage';
  
import { addComma } from '@/common/util';

import type { THistoryDetail } from '@/api/mypage';

import {
  Address,
  AddressList,
  AddressPart,
  Contents,
  InfoLetter,
  LetterImg,
  PhotoContainer,
  PhotoImg,
  PointInfo,
  Section,
  Title,
  UserSelect,
  Wrap,
  Button,
} from './HistoryDetail.style';

interface Params {
  id: string;
}

const HistoryDetail = ({ id }: Params) => {
  const router = useRouter();

  const token = useRecoilValue(tokenAtom);

  const { data: letter } = useSWR<THistoryDetail>(
    () => (!!token && !!id ? '/history/detail' : null),
    () => getMyLetterHistoryDetail(id),
    {
      fallbackData: null || undefined,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    },
  );

  const stampNames: { [key: number]: string } = {
    1: '일반우표',
    2: '등기우표',
    3: '준등기우표',
    4: '특급우표',
  };

  return (
    <MyPageLayout>
      <div css={Wrap}>
        {letter ? (
          <div>
            <div css={Section}>
              <h1 css={Title}>편지 상세</h1>
              <div css={Contents}>
                <img css={LetterImg} src={letter.letterInformation[0].writing_pad_img_url} />
                <div css={InfoLetter}>
                  <div>
                    <p css={UserSelect}>작성한 편지지</p>
                    <p>{letter && letter?.letterInformation.length}장</p>
                  </div>
                  <div>
                    <p css={UserSelect}>선택한 우표</p>
                    <p>{letter && stampNames[letter.letterInformation[0].stamp_id]}</p>
                  </div>
                  <div>
                    <p css={UserSelect}>주소</p>
                    <div css={AddressList}>
                      <div>
                        <p css={AddressPart}>받는 사람</p>
                        <p>{letter.letterInformation[0].delivery_name}</p>
                        <p>
                          {letter.letterInformation[0].delivery_post_code}{' '}
                          {letter.letterInformation[0].delivery_address}
                        </p>
                        <p>{letter.letterInformation[0].delivery_address_detail}</p>
                        <p>{letter.letterInformation[0].delivery_phone}</p>
                      </div>
                      <div css={Address}>
                        <p css={AddressPart}>보내는 사람</p>
                        <p>{letter.letterInformation[0].send_name}</p>
                        <p>
                          {letter.letterInformation[0].send_post_code} {letter.letterInformation[0].send_address}
                        </p>
                        <p>{letter.letterInformation[0].send_address_detail}</p>
                        <p>{letter.letterInformation[0].send_phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div css={Section}>
              <h1 css={Title}>보낸 사진</h1>
              <div css={Contents}>
                <div css={PhotoContainer}>
                  {letter.photo.length > 0 ? (
                    letter.photo.map((photo, index) => (
                      <img key={index} css={PhotoImg} src={photo.img_url} alt={`photo-${index}`} />
                    ))
                  ) : (
                    <p>추가한 사진이 없습니다.</p>
                  )}
                </div>
              </div>
            </div>
            <div css={Section}>
              <p css={Title}>결제 금액</p>
              <div css={Contents}>
                <div css={PointInfo}>
                  <div>
                    <p>적립 포인트</p>
                    <p>{addComma(letter.letterInformation[0].point)} 포인트</p>
                  </div>
                  <div>
                    <p>결제 금액</p>
                    <p>총 {addComma(letter.recipe[0].total_amount)}원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>잠시만 기다려주세요.</div>
        )}
      </div>
      <Button onClick={() => router.push('/mypage/history')}>뒤로 가기</Button>
    </MyPageLayout>
  );
};

export default HistoryDetail;
