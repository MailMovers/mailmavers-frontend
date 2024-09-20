import ProductReviewListUIItem from "./productReviewList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";
import { IProductReviewListUIProps } from "./productReviewList.types";
import * as S from './productReviewList.styles'

export default function ProductReviewListUI(
  props: IProductReviewListUIProps
): JSX.Element {
  return (
    <>
    <S.ReviewCount>소중한 리뷰 총 {props.data.length}건</S.ReviewCount>
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.map((el) => (
        <ProductReviewListUIItem key={el._id} el={el} />
      )) ?? <></>}
    </InfiniteScroll>
      </>
  );
}