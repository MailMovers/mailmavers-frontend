/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
  ANONYMOUS,
} from '@tosspayments/payment-widget-sdk';
import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '@/recoil/auth/atom';
import { getUserId } from '@/api/letter';
import { letterIdState, usePointState } from '@/recoil/letter/atom';
import { Container, PayPoint, PaymentBtn, Wrap } from './Payment.styles';
import LetterHeader from '@/components/letter/LetterHeader';
import { useRouter } from 'next/navigation';
import LetterBottom from '@/components/letter/LetterBottom';

const clientKey = `${process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY}`;

const Payment = () => {
  const router = useRouter();
  const token = useRecoilValue(tokenAtom);
  const letterId = useRecoilValue(letterIdState);
  const getPoint = useRecoilValue(usePointState);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, []);

  if (letterId !== null) {
    window.localStorage.setItem('letterId', letterId.toString());
  }
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance['renderPaymentMethods']
  > | null>(null);

  const { data } = useSWR(
    () =>
      !!token && letterId ? `payments/paymentInfo?letterId=${letterId}` : null,
    getUserId,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const isAmountCleared = data.amount - Number(getPoint) === 0;

  useEffect(() => {
    (async () => {
      if (!isAmountCleared) {
        const price =
          getPoint !== 0 ? data.amount - Number(getPoint) : data.amount;
        const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS);

        if (document.getElementById('payment-widget')) {
          const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
            '#payment-widget',
            price
          );
          paymentMethodsWidgetRef.current = paymentMethodsWidget;
        }
        if (document.getElementById('agreement')) {
          paymentWidget.renderAgreement('#agreement');
        }

        paymentWidgetRef.current = paymentWidget;
      }
    })();
  }, [data, getPoint, isAmountCleared]);

  const requestPay = async () => {
    const paymentWidget = paymentWidgetRef.current;
    const usePoint = getPoint !== null ? getPoint : '0';

    try {
      await paymentWidget?.requestPayment({
        orderId: `${data.orderId}`,
        orderName: `${data.orderName}`,
        successUrl: `${window.location.origin}/letter/success?usePoint=${usePoint}`,
        failUrl: `${window.location.origin}/letter/fail`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const requestClearedPoint = () => {
    router.push(
      `/letter/success?usePoint=${getPoint}paymentKey=null&amount=${data.amount}&orderId=${data.orderId}`
    );
  };

  const proceedPayment = async () => {
    if (!isAmountCleared) {
      requestPay();
    } else if (isAmountCleared) {
      requestClearedPoint();
    }
  };

  return (
    <>
      <LetterHeader />
      <div css={Wrap}>
        <div css={Container}>
          {data.amount - Number(getPoint) !== 0 ? (
            <>
              <div id='payment-widget' />
              <div id='agreement' />
            </>
          ) : (
            <div css={PayPoint}>전액 포인트로 결제하시겠습니까?</div>
          )}
          <button css={PaymentBtn} onClick={proceedPayment}>
            결제하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
