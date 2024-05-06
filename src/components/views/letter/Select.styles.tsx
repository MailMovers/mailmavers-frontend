import { css } from '@emotion/react';

export const Wrap = css`
  @media all and (min-width: 1200px) {
    min-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
  }

  @media all and (max-width: 767px) {
    width: 100%;
  }
  display: flex;
  justify-content: space-between;
`;

export const Container = css`
  @media all and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 3em;
  }
  margin: 0 auto;
`;
export const selectedLetter = css`
  width: 285px;
  height: 400px;
  cursor: poiner;
`;
export const letter = css`
  width: 100%;
  margin: 0 auto;
`;
