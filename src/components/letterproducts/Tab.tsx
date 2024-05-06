'use client';
/** @jsxImportSource @emotion/react */

import {
  ActiveTab,
  ProductTab,
  ProductsTapWrap,
} from '@/components/views/letterproducts/LetterProducts.styles';

export type TabProps = {
  activeTab?: number;
  onClick?: (index: number, e: React.MouseEvent<HTMLButtonElement>) => void;
};

const productTab = [
  { name: '전체보기' },
  { name: '신상' },
  { name: '무지편지지' },
  { name: '포토편지지' },
];

const Tab = ({ activeTab, onClick }: TabProps) => {
  return (
    <div css={ProductsTapWrap}>
      {productTab.map((tab, index) => (
        <button
          type='button'
          css={activeTab === index ? ActiveTab : ProductTab}
          key={index}
          onClick={(e) => onClick && onClick(index, e)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tab;
