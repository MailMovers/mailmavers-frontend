import { Dispatch, SetStateAction } from 'react';



  export type Reviews = {
    id: number;
    name: string;
    content: string;
    star: number;
    created_at: string;
  };
  
  export type ProductReviewProps = {
    reviews: Reviews[];
    totalCount: number;
    reviewTotalScore: number;
    setPage: Dispatch<SetStateAction<number>>;
  };

  export type ScoreProps = {
    src: string;
  };

  export type ScrollNavProps = {
    isFixed: boolean;
  };
  

  export type PProductDetailProps = {
    Reviews: Reviews
    ProductReviewProps: ProductReviewProps
    ScoreProps: ScoreProps
    ScrollNavProps: ScrollNavProps
  }