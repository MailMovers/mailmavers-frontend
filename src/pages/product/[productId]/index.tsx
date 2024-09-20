import { PProductDetailProps } from '@/components/products/[detail]/types'
import ProductDetailPage from '../../../components/products/[detail]/index'


export default function ProductDetail(props: PProductDetailProps):JSX.Element{
    return (
        <>
        <ProductDetailPage {...props}/>
        </>
    )
}