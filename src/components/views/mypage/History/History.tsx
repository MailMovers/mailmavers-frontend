import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import moment from 'moment';
import { useState } from 'react';

import ReviewCreate from '@/components/mypage/history/ReviewCreate';
import { tokenAtom } from '@/recoil/auth/atom';
import { TMyLetter } from '@/type/mypage';
import { getMyLetterHistory } from '@/api/mypage';

import * as S from './History.styles';

export default function History() {
  const router = useRouter();

  const token = useRecoilValue(tokenAtom);

  const { data: letters, mutate: refetch } = useSWR<TMyLetter[]>(
    () => (!!token ? '/history' : null),
    getMyLetterHistory,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  const [selectLetter, setSelectLetter] = useState<TMyLetter | null>(null);

  const onMoveDetail = (letter: TMyLetter) =>
    router.push(`history/${letter.letterId}`);
  const onClickReview = (letter: TMyLetter) => {
    if (letter?.reviewStatus !== 'DONE') {
      setSelectLetter(letter);
    }
  };

  const callbackReview = () => {
    alert('리뷰를 작성하였습니다.');
    setSelectLetter(null);
    refetch();
  };

  return (
    <>
      <S.Wrap>
      <S.TitleContainer>
            <S.Title>안녕하세요!  테스트 님,</S.Title>
            <S.SubTitle>이곳은 <S.TitleContent>보낸 편지 내역</S.TitleContent> 입니다.</S.SubTitle>
          </S.TitleContainer>

        <S.Content>
          <S.CardContainer>
            {letters &&
              letters.map((letter, idx) => (
                <S.CardWrap key={`${letter.letterId}_${idx}`}>
                  <S.CardInfoWrap>
                    <span className='date_text'>
                      {moment(letter.orderCreatedAt).format('YYYY/MM/DD')}
                    </span>

                    <S.CardInfoContent onClick={() => onMoveDetail(letter)}>
                      <span>{letter.name}</span>

                      <div className='address_wrap'>
                        <div className='user_info'>
                          <span>{letter.name}</span>
                          <span>
                            {letter.delivery_phone.replace(
                              /(\d{3})(\d{4})(\d{4})/,
                              '$1-$2-$3'
                            )}
                          </span>
                        </div>
                        <span>
                          {letter.delivery_address}
                          {letter.delivery_address_detail}
                        </span>
                      </div>
                    </S.CardInfoContent>
                  </S.CardInfoWrap>

                  <S.StatusContainer>
                    <S.StatusWrap status={letter.status}>
                      {letter.status}
                    </S.StatusWrap>
                    <S.StatusReviewWrap
                      isDone={letter?.reviewStatus === 'DONE'}
                      onClick={() => onClickReview(letter)}
                    >
                      {letter.reviewStatus === 'DONE' ? '작성완료' : '후기작성'}
                    </S.StatusReviewWrap>
                  </S.StatusContainer>
                </S.CardWrap>
              ))}
              {letters && letters.length === 0 && <S.EmptyMessage>작성하신 편지가 없습니다.</S.EmptyMessage>}
          </S.CardContainer>
        </S.Content>
      </S.Wrap>

      {selectLetter && (
        <ReviewCreate
          close={() => setSelectLetter(null)}
          callback={callbackReview}
          letter={selectLetter}
        />
      )}
    </>
  );
}
