import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Pagination, Rate } from 'antd';
import useSWR from 'swr';
import moment from 'moment';
import { CloseOutlined } from '@ant-design/icons';
import { tokenAtom } from '@/recoil/auth/atom';
import { delMyReview, getMyReivewList } from '@/api/mypage';
import type { TMyReiview, TReview } from '@/type/mypage';

import * as S from './Review.styles';
import { userInfoAtom } from '@/recoil/mypage/atom';
import { exampleReviews } from './Review.mock';

export default function ReviewPage(): JSX.Element {
  const token = useRecoilValue(tokenAtom);
  const userInfo = useRecoilValue(userInfoAtom);
  // const [page, setPage] = useState<number>(1);

  // const [mockReviews, setMockReviews] = useState<TReview[]>(exampleReviews);

  const { data, mutate: refetch } = useSWR<TMyReiview>(
    () => (!!token ? `/mypage/reviews` : null),
    () => getMyReivewList(),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  const handleDelete = async (reviewId: number) => {
    try {
      await delMyReview(reviewId);
      refetch();
    } catch (error) {
      console.error('리뷰 삭제 실패:', error);
    }
  };
  // const handlePage = (pageData: number) => {
  //   setPage(pageData);
  // };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [page]);

  return (
    <S.Wrap>
      <S.TitleContainer>
        <S.Title>안녕하세요! {userInfo?.name} 님,</S.Title>
        <S.SubTitle>
            이곳은 <S.TitleContent>작성한 리뷰</S.TitleContent> 입니다.
          </S.SubTitle>
      </S.TitleContainer>
      <S.Content>
      <S.CardContainer>
        {data && data.data ? (
          data.data.map((review: TReview) => (
            <S.CardWrap key={`${review.reviewId}`}>
              <S.ImgScoreWrap>
                <S.MobileImgDeleteBtnWrapper>
                  <S.ReviceImage
                    src={review.imgUrl1}
                    alt='리뷰이미지'
                    width={0}
                    height={0}
                  />
                  <S.MobileDeleteBtn onClick={() =>handleDelete(review.reviewId)}>삭제</S.MobileDeleteBtn>
                </S.MobileImgDeleteBtnWrapper>
                <S.Score disabled defaultValue={review.score} />
              </S.ImgScoreWrap>
              <S.ReviewContentWrap>
                <S.ReviewDate>
                  작성일 : {moment(review.reviewCreatedAt).format('YYYY/MM/DD')}
                </S.ReviewDate>
                <S.ReviewContent>{review.content}</S.ReviewContent>
              </S.ReviewContentWrap>
              <S.DeleteBtn onClick={() => handleDelete(review.reviewId)}>
                <CloseOutlined />
              </S.DeleteBtn>
            </S.CardWrap>
          ))
        ) : (
          <S.EmptyMessage>작성하신 리뷰가 없습니다.</S.EmptyMessage>
        )}
      </S.CardContainer>
          {/* <S.PaginationContainer>
          <Pagination
            total={data ? Number(data?.count || 0) * 2 : 0}
            current={page}
            onChange={(value) => handlePage(value)}
          />
          </S.PaginationContainer> */}
        </S.Content>
    </S.Wrap>
  );
}
