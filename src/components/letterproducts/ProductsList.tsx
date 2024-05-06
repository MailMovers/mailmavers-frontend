'use client';
/** @jsxImportSource @emotion/react */

import { Data } from '@/type/letterProducts';
import * as S from '@/components/views/letterproducts/LetterProducts.styles';

export type ProductListProps = {
  letterProductList: Data[];
  onClick: (index: number) => void;
};

const ProductList = ({ letterProductList, onClick }: ProductListProps) => {
  return (
    <>
      {Array.isArray(letterProductList) && letterProductList.length > 0 && (
        <ul css={S.ProductsList}>
          {letterProductList.map((product, index) => (
            <li
              css={S.ProductsItem}
              key={index}
              onClick={() => onClick(product.id)}
            >
              <p css={S.ProductImgWrap}>
                <img css={S.Img} src={product.img_url_1} alt={product.name} />
              </p>
              <h4 css={S.ProductTitle}>{product.name}</h4>
              <p css={S.ProductDetail}>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
      {Array.isArray(letterProductList) && !letterProductList.length && (
        <p css={S.NotProductWrap}>
          <span css={S.NotProduct}>상품을 준비 중입니다.</span>
        </p>
      )}
    </>
  );
};

export default ProductList;
