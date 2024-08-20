/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import { useSetRecoilState } from 'recoil';
import { getNewList, getPopularList } from '@/api/main';
import { productIdAtom } from '@/recoil/letter-product/atom';
import type { TNewProduct } from '@/type/main';
import MainPageUI from './main.presenter';



export default function MainPage() {
  const router = useRouter();

  const setProductId = useSetRecoilState(productIdAtom);

  const goLetterProducts = () => router.push('/letterproducts');
  const goSignUp = () => router.push('/signup');
  const goLetterDetail = (productId: number) => {
    setProductId(productId);
    const product = String(productId);
    localStorage.setItem('product', product);
    router.push('letterproducts/letter-product-detail');
  };

  const { data: reviewList = [] } = useSWR<TNewProduct[]>(
    () => '/product/new',
    getNewList,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  const { data: populars = [] } = useSWR<TNewProduct[]>(
    () => '/product/popular',
    getPopularList,
    {
      fallbackData: [],
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: true,
    }
  );

  useEffect(() => {
    const status = router.query.status as string;

    if (status === 'expire') {
      // modal.confirm({
      //   title: '인증 만료',
      //   content: '인증이 만료 되었습니다.',
      //   okText: '확인',
      //   cancelText: '취소',
      // });
      // router.push('/logout');
    }
  }, []);

  return (
    <MainPageUI 
    setProductId={setProductId}
    goLetterProducts={goLetterProducts}
    goSignUp={goSignUp}
    goLetterDetail={goLetterDetail}
    populars={populars}
    reviewList={reviewList}
    />
  )
}
 