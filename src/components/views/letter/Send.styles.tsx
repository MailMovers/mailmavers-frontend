import { css } from '@emotion/react';

export const Wrap = css`
  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Container = css`
  @media all and (min-width: 1200px) {
    min-width: 1200px;
    margin: 0 auto;
  }
  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    width: calc(100vw - 3em);
    margin: 0 auto;
  }
`;

export const InfoPost = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StampZone = css`
  padding: 0 95px;
`;
