import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Pagination } from 'antd';
import useSWR from 'swr';
import moment from 'moment';

import MyPageLayout from '@/components/mypage/MyPageLayout';

import { tokenAtom } from '@/recoil/auth/atom';
import { getMyReivewList } from '@/api/mypage';
import type { TMyReiview } from '@/type/mypage';

import * as S from './Review.styles';

export default function ReviewPage() {
  const token = useRecoilValue(tokenAtom);

  const [page, setPage] = useState<number>(1);

  const { data, mutate: refetch } = useSWR<TMyReiview>(
    () => (!!token && page ? `/reviews/list?page=${page}` : null),
    () => getMyReivewList(page),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  const handlePage = (pageData: number) => {
    setPage(pageData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <MyPageLayout>
      <S.Wrap>
        <S.Content>
          <p>작성한 리뷰</p>

          <S.CardContainer>
            {data &&
              data.getReviewList.map((review) => (
                <S.CardWrap key={`${review.reviewId}`}>
                  <S.CardInfoWrap>
                    <span className='desc_wrap'>
                      작성일 :{' '}
                      {moment(review.review_created_at).format('YYYY/MM/DD')}
                    </span>
                    <span className='desc_wrap'>{review.content}</span>
                    <div className='score_wrap'>
                      <S.ScoreWrap>
                        {[...Array(review.score)].map((_, index) => (
                          <span className='icon' key={index}>
                            <S.ScoreImage
                              src={'/icon/star_filled.svg'}
                              alt={`별점 ${index + 1}`}
                              width={10}
                              height={10}
                            />
                          </span>
                        ))}
                      </S.ScoreWrap>
                    </div>
                  </S.CardInfoWrap>

                  <S.StatusContainer>
                    <S.ReviceImage
                      src={review.img_url_1}
                      alt='리뷰이미지'
                      width={0}
                      height={0}
                    />
                  </S.StatusContainer>
                </S.CardWrap>
              ))}
          </S.CardContainer>
          <Pagination
            total={data ? Number(data?.count || 0) * 2 : 0}
            current={page}
            onChange={(value) => handlePage(value)}
          />
        </S.Content>
      </S.Wrap>
    </MyPageLayout>
  );
}
