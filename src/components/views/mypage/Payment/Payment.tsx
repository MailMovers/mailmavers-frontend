import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import moment from 'moment';

import { tokenAtom } from '@/recoil/auth/atom';
import { TMypagePayment } from '@/type/mypage';
import { getMyPayments } from '@/api/mypage';

import * as S from './Payment.styles';
import { userInfoAtom } from '@/recoil/mypage/atom';

export default function Payment() {
  const token = useRecoilValue(tokenAtom);
  const userInfo = useRecoilValue(userInfoAtom);

  const { data: payments = null } = useSWR<TMypagePayment>(
    () => (!!token ? '/payments/pointTransactions' : null),
    getMyPayments,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  return (
    <S.Wrap>
      <S.TitleContainer>
        <S.Title>안녕하세요! {userInfo?.name} 님,</S.Title>
        <S.SubTitle>이곳은 <S.TitleContent>포인트 내역</S.TitleContent> 입니다.</S.SubTitle>
      </S.TitleContainer>
      <S.Content>
        <S.CardContainer>
          {payments?.transactions.map((payment) => (
            <S.CardWrap key={`${payment.transaction_id}`}>
              <S.CardInfoWrap>
                <span className='date_text'>
                  {moment(payment.transaction_date).format('YYYY/MM/DD')}
                </span>

                <S.CardInfoContent>
                  <span className='desc_wrap'>
                    <strong className={payment.transaction_type}>
                      {payment.description}
                    </strong>
                    하셨습니다.
                  </span>
                </S.CardInfoContent>
              </S.CardInfoWrap>

              <S.StatusContainer>
                <S.StatusWrap status={payment.transaction_type}>
                  {payment.transaction_type === 'use' && '사용'}
                  {(payment.transaction_type === 'save' ||
                    payment.transaction_type === 'event') &&
                    '적립'}
                </S.StatusWrap>
              </S.StatusContainer>
            </S.CardWrap>
          ))}
        </S.CardContainer>
      </S.Content>
        <S.EmptyMessage>적립 또는 사용한 포인트 내역이 없습니다.</S.EmptyMessage>
    </S.Wrap>
  );
}
