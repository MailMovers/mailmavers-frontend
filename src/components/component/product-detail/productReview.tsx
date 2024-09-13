// 'use client';
// /** @jsxImportSource @emotion/react */

// import { Dispatch, SetStateAction } from 'react';
// import { Reviews } from '@/type/letterProducts';
// import { Common } from 'styles/common';
// import styled from '@emotion/styled';
// import Score from './score';

// export type ProductReviewProps = {
//   reviews: Reviews[];
//   totalCount: number;
//   reviewTotalScore: number;
//   setPage: Dispatch<SetStateAction<number>>;
// };

// const ProductReview = ({ reviews, totalCount, reviewTotalScore, setPage }: ProductReviewProps) => {
//   const handlePage = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <div id="review">
//       <ReviewWrap>
//         <Review>제품 리뷰</Review>
//         <ReviewTitleContainer>
//           <ReviewCountWrap>
//             <ReviewScore src="/icon/yellow_filled_star.svg" alt="별점" />
//             <ReviewTitle>{reviews.length > 0 ? reviewTotalScore : 0}</ReviewTitle>
//           </ReviewCountWrap>
//           <ReviewTotalCount>{totalCount}건의 리뷰가 작성되었습니다.</ReviewTotalCount>
//         </ReviewTitleContainer>
//         <ReviewsContainer>
//           {Array.isArray(reviews) && reviews.length > 0 ? (
//             reviews.map((review, index) => {
//               const starPercentage: number = (review.star / 5) * 100;
//               const name = review.name.charAt(0) + '*'.repeat(review.name.length - 1);
//               const originalDate: Date = new Date(review.created_at);

//               const year = originalDate.getFullYear();
//               const month = String(originalDate.getMonth() + 1).padStart(2, '0');
//               const day = String(originalDate.getDate()).padStart(2, '0');

//               const formattedDate = `${year}.${month}.${day}`;

//               return (
//                 <ReviewContainer key={index}>
//                   <div style={{ marginRight: '3em' }}>
//                     <ReviewStar>
//                       <Score src="/icon/star.svg" />
//                       <ReviewStarColor style={{ width: `${starPercentage}%` }}>
//                         <Score src="/icon/star_filled.svg" />
//                       </ReviewStarColor>
//                     </ReviewStar>
//                     <ReviewContent>{review.content}</ReviewContent>
//                   </div>
//                   <div>
//                     <ReviewDate>{formattedDate}</ReviewDate>
//                     <p>{name} 님</p>
//                   </div>
//                 </ReviewContainer>
//               );
//             })
//           ) : (
//             <NoneReview>등록된 리뷰가 없습니다.</NoneReview>
//           )}
//         </ReviewsContainer>
//         <ReviewMoreBtnContainer>
//           {totalCount > reviews.length && (
//             <ReviewMoreBtn type="button" onClick={handlePage}>
//               더보기
//             </ReviewMoreBtn>
//           )}
//         </ReviewMoreBtnContainer>
//       </ReviewWrap>
//     </div>
//   );
// };

// export default ProductReview;

// const ReviewWrap = styled.div`
//   @media all and (max-width: 767px) {
//     padding: 0 1.5em;
//   }
// `;

// const ReviewTitleContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 8.31em;
//   border: 1px solid ${Common.colors.gray02};

//   @media all and (max-width: 767px) {
//     flex-direction: column;
//     gap: 0.5em;
//   }
// `;

// const Review = styled.h2`
//   color: ${Common.colors.black};
//   font-size: ${Common.fontSize.fs18};
//   font-weight: 500;
//   margin-bottom: 1.25em;
// `;

// const ReviewScore = styled.img`
//   width: 2.5em;
//   height: 2.5em;
// `;

// const ReviewTitle = styled.p`
//   margin-left: 0.94rem;
//   margin-right: 1.81rem;
//   color: ${Common.colors.black};
//   font-size: 2.5em;
//   font-weight: 500;
// `;

// const ReviewTotalCount = styled.p`
//   color: ${Common.colors.gray01};
//   font-size: ${Common.fontSize.fs14};
//   font-weight: 500;
//   line-height: 1.48em;
// `;

// const ReviewCountWrap = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const ReviewsContainer = styled.ul`
//   display: flex;
//   flex-direction: column;
// `;

// const ReviewContainer = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: ${Common.fontSize.fs14};
//   color: ${Common.colors.black};
//   border-bottom: 1px solid ${Common.colors.gray02};

//   @media all and (min-width: 1200px) {
//     padding: 3.13em 7.06em 3.13em 0;
//   }

//   @media all and (min-width: 768px) and (max-width: 1199px), all and (max-width: 767px) {
//     padding: 3.13em 0;
//   }
// `;

// const ReviewContent = styled.p`
//   width: 100%;
//   line-height: 1.5em;
//   text-align: justify;
// `;

// const NoneReview = styled.li`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 8.75em;
//   font-size: ${Common.fontSize.fs20};
//   color: ${Common.colors.gray01};
// `;

// const ReviewMoreBtnContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 2.5em;
//   margin-bottom: 13.94em;
// `;

// const ReviewMoreBtn = styled.button`
//   width: 10.88em;
//   height: 2.63em;
//   border-radius: 5px;
//   border: 1px solid ${Common.colors.gray03};
//   background: ${Common.colors.gray01};
//   color: ${Common.colors.white};
//   font-size: ${Common.fontSize.fs16};
// `;

// const ReviewStar = styled.span`
//   position: relative;
//   display: inline-block;
//   padding: 0;
//   margin-bottom: 0.56em;
// `;

// const ReviewStarColor = styled.span`
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: inline-block;
//   display: flex;
//   overflow: hidden;
//   padding: 0;
// `;

// const ReviewDate = styled.p`
//   color: ${Common.colors.gray01};
//   margin-bottom: 0.19em;
// `;
