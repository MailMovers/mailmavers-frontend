/** @jsxImportSource @emotion/react */

import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  sortAtom,
  ActiveTabAtom,
  productIdAtom,
} from '@/recoil/letter-product/atom';
import { Data, sortList } from '@/type/letterProducts';
import { getProductList, getProductSortList } from '@/api/letterProducts';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './LetterProducts.styles';
import Tab from '@/components/letterproducts/Tab';
import ProductList from '@/components/letterproducts/ProductsList';
import PageNav from '@/components/letterproducts/PageNav';

const LetterProducts = () => {
  const [letterProductList, setLetterProductList] = useState<Data[]>([]);
  const [activeTab, setActiveTab] = useRecoilState(ActiveTabAtom);
  const [tabTitle, setTabTitle] = useState<string>('전체보기');
  const [sort, setSort] = useRecoilState(sortAtom);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(1);
  const setProductId = useSetRecoilState(productIdAtom);
  const router = useRouter();
  const pageSize = 5;
  const countPerPage = 8;

  const handleSort = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const sort = e.currentTarget.innerText;
    const sortName = sortList[sort] || '';

    setActiveTab(index);
    setTabTitle(sort);
    setSort(sortName);
    setPage(1);
  };

  const pageNation = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nowPage = Number(e.currentTarget.innerText);
    window.scrollTo({ top: 0 });
    setPage(nowPage);
  };

  const goDetail = (productId: number) => {
    setProductId(productId);
    const product = String(productId);
    localStorage.setItem('product', product);
    router.push('letterproducts/letter-product-detail');
  };

  useEffect(() => {
    if (sort === '') {
      getProductList(page).then(({ letterProducts, count }) => {
        setTotalCount(count);
        setLetterProductList(letterProducts);
      });
    } else {
      getProductSortList(page, sort).then(({ productList, count }) => {
        setTotalCount(count);
        setLetterProductList(productList);
      });
    }
  }, [page, sort]);

  useEffect(() => {
    switch (sort) {
      case '':
        setTabTitle('전체보기');
        break;
      case 'new':
        setTabTitle('신상');
        break;
      case 'none':
        setTabTitle('무지편지지');
        break;
      case 'photo':
        setTabTitle('포토편지지');
        break;
      default:
        break;
    }
  }, []);

  return (
    <div css={S.ProductsWrap}>
      <div css={S.ProductsPage}>
        <Tab activeTab={activeTab} onClick={handleSort} />
        <h1 css={S.PageTitle}>{tabTitle}</h1>
        {letterProductList && (
          <ProductList
            letterProductList={letterProductList}
            onClick={goDetail}
          />
        )}
        {Array.isArray(letterProductList) && letterProductList.length > 0 && (
          <PageNav
            pageSize={pageSize}
            countPerPage={countPerPage}
            totalCount={totalCount}
            page={page}
            pageNation={pageNation}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default LetterProducts;
