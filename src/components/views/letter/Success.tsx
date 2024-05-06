/** @jsxImportSource @emotion/react */

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import { tokenAtom } from '@/recoil/auth/atom';

import { postPointCleardData } from '@/api/letter';

import { Container, NextButton, Wrap } from './Success.styles';

export default function Success() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = useRecoilValue(tokenAtom);
  const usePoint = searchParams.get('usePoint');
  const changePoint =
    usePoint !== null && usePoint !== '' ? parseInt(usePoint) : 0;
  const paymentKey = searchParams.get('paymentKey');
  const orderId = searchParams.get('orderId');
  const amount = parseInt(searchParams.get('amount') || '0');

  const url = `${process.env.NEXT_PUBLIC_API_HOST}payments/success`;

  const queryParams = new URLSearchParams();
  queryParams.set('paymentKey', paymentKey || '');
  queryParams.set('amount', amount.toString());
  queryParams.set('orderId', orderId || '');

  const queryString = queryParams.toString();
  const fullUrl = `${url}?${queryString}`;

  // 서버로 결제 정보 보내기
  useEffect(() => {
    const letterId = localStorage.getItem('letterId');
    const isAmountCleared = amount - changePoint === 0;
    const clearedPointData = {
      usePoint: changePoint,
      letterId,
      orderId,
    };

    //ToDo : 분리하기
    const getOrderConfirmData = async () => {
      if (token && !isAmountCleared) {
        try {
          await axios.post(
            `${fullUrl}`,
            { usePoint: changePoint, letterId },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } catch (err: any) {
          router.push(
            `/letter/fail?code=${
              err.response.data.code
            }&message=${encodeURIComponent(err.response.data.message)}`
          );
        }
      } else if (token && isAmountCleared) {
        try {
          postPointCleardData(clearedPointData);
        } catch (err: any) {
          router.push(
            `/letter/fail?code=${
              err.response.data.code
            }&message=${encodeURIComponent(err.response.data.message)}`
          );
        }
      }
    };

    getOrderConfirmData();
  }, [fullUrl, token, usePoint]);

  const goToMypage = () => {
    router.push(`/mypage/history`);
  };

  return (
    <div css={Wrap}>
      <div css={Container}>
        <h1>결제가 완료되었습니다.</h1>
        <button css={NextButton} onClick={goToMypage}>
          보낸 내역 확인하기
        </button>
      </div>
    </div>
  );
}
