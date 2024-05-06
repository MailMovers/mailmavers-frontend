'use client';
/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import * as S from '@/components/views/letterproducts/LetterProducts.styles';

export type PageNavProps = {
  pageSize: number;
  countPerPage: number;
  totalCount: number;
  page: number;
  pageNation: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PageNav = ({
  pageSize,
  countPerPage,
  totalCount,
  page,
  pageNation,
  setPage,
}: PageNavProps) => {
  const [start, setStart] = useState<number>(1);
  const totalPages = Math.ceil(totalCount / countPerPage);
  const isDisabledPrev = start === 1;
  const isDisabledNext = start + pageSize - 1 >= totalPages;

  const handlePageNumber = (direction: 'prev' | 'next' = 'next') => {
    if (direction === 'next') {
      setPage(start + pageSize);
    } else {
      setPage(start - 1);
    }
  };

  useEffect(() => {
    if (page === start + pageSize) setStart((prev) => prev + pageSize);
    if (page < start) setStart((prev) => prev - pageSize);
  }, [page, pageSize, start]);

  return (
    <div css={S.PageNumberWrap}>
      <button
        type='button'
        css={isDisabledPrev ? [S.Button, { opacity: 0.5 }] : S.Button}
        disabled={isDisabledPrev}
        onClick={() => handlePageNumber('prev')}
      >
        <img src='/icon/left_arrow.svg' alt='이전으로 이동' />
      </button>
      <p css={S.ButtonsWrap}>
        {[...Array(pageSize)].map((_, i) => (
          <React.Fragment key={i}>
            {start + i <= totalPages && (
              <button
                onClick={pageNation}
                type='button'
                css={page === start + i ? S.ActiveButton : S.Button}
                key={i}
              >
                {start + i}
              </button>
            )}
          </React.Fragment>
        ))}
      </p>
      <button
        type='button'
        css={isDisabledNext ? [S.Button, { opacity: 0.5 }] : S.Button}
        disabled={isDisabledNext}
        onClick={() => handlePageNumber('next')}
      >
        <img src='/icon/right_arrow.svg' alt='다음으로 이동' />
      </button>
    </div>
  );
};

export default PageNav;
