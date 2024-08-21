/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import { useSetRecoilState } from 'recoil';
import { getNewList, getPopularList } from '@/api/main';
import { productIdAtom } from '@/recoil/letter-product/atom';
import type { TNewProduct } from '@/type/main';
import MainPageUI from './main.presenter';

const NEW_PRODUCT_URL = '/product/new';
const POPULAR_PRODUCT_URL = '/product/popular';
const LETTER_PRODUCTS_URL = '/letterproducts';
const SIGNUP_URL = '/signup';
const LETTER_PRODUCT_DETAIL_URL = 'letterproducts/letter-product-detail';

export default function MainPage() {
  const router = useRouter();


  const goLetterProducts = () => router.push(LETTER_PRODUCTS_URL);
  const goSignUp = () => router.push(SIGNUP_URL);
  const goLetterDetail = (productId: number) => {

    localStorage.setItem('product', String(productId));
    router.push(LETTER_PRODUCT_DETAIL_URL);
  };

  const { data: reviewList = [], error: reviewError } = useSWR<TNewProduct[]>(
    NEW_PRODUCT_URL,
    getNewList,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  const { data: populars = [], error: popularError } = useSWR<TNewProduct[]>(
    POPULAR_PRODUCT_URL,
    getPopularList,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  return (
    <MainPageUI 

      goLetterProducts={goLetterProducts}
      goSignUp={goSignUp}
      goLetterDetail={goLetterDetail}
      populars={populars}
      reviewList={reviewList}
    />
  );
}