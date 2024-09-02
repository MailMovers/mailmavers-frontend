/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import BestProductsUI from './best.products.presenter';
import { useState } from 'react';
import { items } from './mocks';
import { MainPageUIProps } from '../../../type/main';
const LETTER_PRODUCTS_URL = '/letterproducts';
const SIGNUP_URL = '/signup';

export default function BestProductsListPage(props: MainPageUIProps) {
  const router = useRouter();

  const goLetterProducts = () => router.push(LETTER_PRODUCTS_URL);
  const goSignUp = () => router.push(SIGNUP_URL);
  const goLetterDetail = (productId: number) => {
    router.push(`/letterproducts/${productId}`);
  };

  const [selectedCategory, setSelectedCategory] = useState('흑백');
  const [isActive, setIsActive] = useState(false);
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter(item => item.category === selectedCategory);

  return (
    <BestProductsUI 
      goLetterProducts={goLetterProducts}
      goSignUp={goSignUp}
      goLetterDetail={goLetterDetail}
      onCategoryChange={handleCategoryChange}
      selectedCategory={selectedCategory}
      items={filteredItems}
      isActive={isActive}
    />
  );
}