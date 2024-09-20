

import ProductDetail from './product-detail'
import ProductReviewListUI from '../product-reviews/list/productReviewList.container'
import ProductReviewWrite from '../product-reviews/write/productReviewWrite.container'

import {PProductDetailProps} from './types' 

export default function ProductDetailPage(props: PProductDetailProps):JSX.Element {
    return (
        <>
        <ProductDetail />
        <ProductReviewWrite />
        <ProductReviewListUI/>
        </>
    )
}