import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import moment from 'moment';

import MyPageLayout from '@/components/mypage/MyPageLayout';
import { tokenAtom } from '@/recoil/auth/atom';
import { TMypagePayment } from '@/type/mypage';
import { getMyPayments } from '@/api/mypage';

import * as S from './Payment.styles';

export default function Payment() {
  const token = useRecoilValue(tokenAtom);

  const { data: payments } = useSWR<TMypagePayment>(
    () => (!!token ? '/payments/pointTransactions' : null),
    getMyPayments,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  return (
    <MyPageLayout>
      <S.Wrap>
        <S.Content>
          <p>적립 내역</p>

          <S.CardContainer>
            {payments &&
              payments.transactions.map((payment) => (
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
                      {payment.transaction_type === 'save' && '적립'}
                    </S.StatusWrap>
                  </S.StatusContainer>
                </S.CardWrap>
              ))}
          </S.CardContainer>
        </S.Content>
      </S.Wrap>
    </MyPageLayout>
  );
}
