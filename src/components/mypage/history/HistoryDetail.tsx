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

import * as S from './HistoryDetail.style';
import { useState } from 'react';
import { exampleLetters } from '@/components/views/mypage/History/History.mock';

interface Params {
  id: string;
}

const HistoryDetail = ({ id }: Params) => {
  const router = useRouter();

  const token = useRecoilValue(tokenAtom);

  const [letter] = useState(() => exampleLetters.find(l => l.letterId === parseInt(id)));

  // const { data: letter } = useSWR<THistoryDetail>(
  //   () => (!!token && !!id ? '/history/detail' : null),
  //   () => getMyLetterHistoryDetail(id),
  //   {
  //     // fallbackData: null || undefined,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //     revalidateOnMount: true,
  //   },
  // );

  const stampNames: { [key: number]: string } = {
    1: '일반우표',
    2: '등기우표',
    3: '준등기우표',
    4: '특급우표',
  };

  return (
      <S.Wrap>
        {letter ? (
          <div>
            <S.Section>
              <S.Title>편지 상세</S.Title>
              <S.Contents>
                <S.LetterImg src={letter.letterInformation[0].writing_pad_img_url} />
                <S.InfoLetter>
                  <div>
                    <S.UserSelect>작성한 편지지</S.UserSelect>
                    <S.UserSelectInfo>{letter && letter?.letterInformation.length}장</S.UserSelectInfo>
                  </div>
                  <div>
                    <S.UserSelect>선택한 우표</S.UserSelect>
                    <S.UserSelectInfo>{letter && stampNames[letter.letterInformation[0].stamp_id]}</S.UserSelectInfo>
                  </div>
                  <div>
                    <S.UserSelect>주소</S.UserSelect>
                    <S.AddressList>
                      <S.Address>
                        <S.AddressPart>받는 사람</S.AddressPart>
                        <p>{letter.letterInformation[0].delivery_name}</p>
                        <p>
                          {letter.letterInformation[0].delivery_post_code}{' '}
                          {letter.letterInformation[0].delivery_address}
                        </p>
                        <p>{letter.letterInformation[0].delivery_address_detail}</p>
                        <p>{letter.letterInformation[0].delivery_phone}</p>
                      </S.Address>
                      <S.Address id='sendInfo'>
                        <S.AddressPart>보내는 사람</S.AddressPart>
                        <p>{letter.letterInformation[0].send_name}</p>
                        <p>
                          {letter.letterInformation[0].send_post_code} {letter.letterInformation[0].send_address}
                        </p>
                        <p>{letter.letterInformation[0].send_address_detail}</p>
                        <p>{letter.letterInformation[0].send_phone}</p>
                      </S.Address>
                    </S.AddressList>
                  </div>
                </S.InfoLetter>
              </S.Contents>
            </S.Section>
            <S.Section>
              <S.Title>보낸 사진</S.Title>
              <S.Contents>
                <S.PhotoContainer>
                  {letter.photo.length > 0 ? (
                    letter.photo.map((photo, index) => (
                      <S.PhotoImg key={index} src={photo.img_url} alt={`photo-${index}`} />
                    ))
                  ) : (
                    <p>추가한 사진이 없습니다.</p>
                  )}
                </S.PhotoContainer>
              </S.Contents>
            </S.Section>
            <S.Section>
              <S.Title>결제 금액</S.Title>
              <S.Contents>
                <S.PointInfo>
                  <div>
                    <p>적립 포인트</p>
                    <p>{addComma(letter.letterInformation[0].point)} 포인트</p>
                  </div>
                  <div>
                    <p>결제 금액</p>
                    <p>총 {addComma(letter.recipe[0].total_amount)}원</p>
                  </div>
                </S.PointInfo>
              </S.Contents>
            </S.Section>
          </div>
        ) : (
          <div>잠시만 기다려주세요.</div>
        )}
        <S.BtnContainer>
      <S.Button onClick={() => router.push('/mypage/history')}>뒤로 가기</S.Button>
        </S.BtnContainer>
      </S.Wrap>
  );
};

export default HistoryDetail;