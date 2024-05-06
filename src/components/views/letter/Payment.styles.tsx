import { css } from '@emotion/react';
import { Common } from 'styles/common';

export const Wrap = css`
  width: 100%;
`;

export const Container = css`
  @media all and (min-width: 1200px) {
    max-width: 496px;
    margin: 0 auto;
  }

  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5em;
  }
`;

export const PayPoint = css`
  font-size: ${Common.fontSize.fs18};
  padding: 100px 0;
  text-align: center;
`;

export const PaymentBtn = css`
  width: 496px;
  height: 50px;
  border-radius: 5px;
  background-color: ${Common.colors.theme};
  color: ${Common.colors.white};
  margin-top: 50px;

  @media all and (min-width: 1200px) {
    max-width: 496px;
    margin: 0 auto;
  }

  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5em;
  }
`;
