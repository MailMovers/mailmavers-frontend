
import ProductListPresenter from './productsList.presenter';
import { mockLetterProductList } from './mocks';


export default function ProductListContainer() {

    return (
    <>

    <ProductListPresenter products={mockLetterProductList} />
    </>
  )
};


