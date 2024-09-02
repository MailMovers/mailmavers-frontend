/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import BestProductsUI from './best.products.presenter';
import { useState, useEffect } from 'react';
import { items } from './mocks';
import { MainPageUIProps } from '../../../type/main';

interface Item {
  id: number;
  category: string;
  productImage: string;
  productTitle: string;
  productSubTitle: string;
  productPrice: string;
  productStarRate: string;
  productReviewCount: string;
}

const LETTER_PRODUCTS_URL = '/letterproducts';
const SIGNUP_URL = '/signup';

export default function BestProductsListPage(props: MainPageUIProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('흑백');
  const [isActive, setIsActive] = useState(false);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    setFilteredItems(items.filter(item => item.category === selectedCategory));
  }, [selectedCategory]);

  useEffect(() => {
    setFilteredItems(items.filter(item => item.category === selectedCategory));
  }, []);

  const goLetterProducts = () => router.push(LETTER_PRODUCTS_URL);
  const goSignUp = () => router.push(SIGNUP_URL);
  const goLetterDetail = (productId: number) => {
    router.push(`/letterproducts/${productId}`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

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