export interface IProductReview {
    _id: string;
    writer: string;
    contents: string;
    createdAt: string;
    rating: number;
  }
  
  export interface IProductReviewListUIItemProps {
    el: IProductReview;
  }
  
  export interface IProductReviewListUIProps {
    data: IProductReview[];
    onLoadMore: () => void;
  }