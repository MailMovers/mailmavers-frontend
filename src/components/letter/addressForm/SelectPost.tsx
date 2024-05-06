import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { selectedStampDataState } from '@/recoil/selectAddress/atom';
import { css } from '@emotion/react';
import { Common } from 'styles/common';

const SelectPost = () => {
  const [selectPost, setSelectPost] = useState<number | null>(null);
  const [selectedStampData, setSelectedStampData] = useRecoilState(selectedStampDataState);
  const handleSelectPost = (id: number) => {
    setSelectPost(id);
    setSelectedStampData({ id });
    if (selectedStampData) {
      setSelectPost(id);
    }
  };

  return (
    <div>
      <h1 css={SubTitle}>우편 선택</h1>
      <ul css={PostArea}>
        {list.map((list) => (
          <PostList key={list.id} onClick={() => handleSelectPost(list.id)} isSelected={list.id === selectPost}>
            <p>{list.name}</p>
            <div>
              <p css={Price}>{list.price}</p>
              <p css={PostNotice}>
                {list.notice1}
                <br />
                {list.notice2}
              </p>
            </div>
          </PostList>
        ))}
      </ul>
    </div>
  );
};

export default SelectPost;

const SubTitle = css`
  margin: 80px 0 20px;
  font-size: ${Common.fontSize.fs18};
  font-weight: bold;
  color: ${Common.colors.theme};

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 544px;
    margin: 80px auto 20px;
  }
`;

const PostArea = css`
  width: 1200px;
  display: flex;
  padding: 20px;
  border: 1px solid ${Common.colors.gray02};
  border-radius: 5px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  line-height: 1.5;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 544px;
  }
  @media all and (max-width: 767px) {
    width: calc(100vw - 3em);
  }
`;

const PostList = styled.li<{ isSelected: boolean }>`
  width: 25%;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? `${Common.colors.yellowgreen}` : 'transparent')};

  @media all and (min-width: 768px) and (max-width: 1199px), all and (max-width: 767px) {
    width: 50%;
  }
`;

const PostNotice = css`
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.gray};
`;

const Price = css`
  color: ${Common.colors.red};
  font-weight: 600;
  margin-bottom: 5px;
`;

export const list = [
  { id: 1, name: '일반우편', price: '1,500원', notice1: '도서산간 지역 제외', notice2: '발송 후 평일기준 3~5일 소요' },
  {
    id: 2,
    name: '등기우편',
    price: '3,500원',
    notice1: '도서산간 지역 제외',
    notice2: '발송 후 평일기준 3~5일 소요',
  },
  {
    id: 3,
    name: '준등기우편',
    price: '3,000원',
    notice1: '도서산간 지역 제외',
    notice2: '발송 후 평일기준 3~5일 소요',
  },
  {
    id: 4,
    name: '익일특급우편',
    price: '4,000원',
    notice1: '도서산간 지역 제외',
    notice2: '발송 후 평일기준 3~5일 소요',
  },
];
