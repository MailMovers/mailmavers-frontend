import { PProductListProps } from '@/components/products/types';
import ProductList from '../../components/products/list';

export default function ProductListPage(props: PProductListProps) {
  return (
    <ProductList {...props} />
  );
}