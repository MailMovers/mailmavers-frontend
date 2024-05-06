import { css } from '@emotion/react';
import { Common } from 'styles/common';

export const Wrap = css`
  width: 100%;
  max-width: 1200px;
  padding: 0 2.25em;
  margin: 0 auto;
`;

export const Container = css`
  text-align: center;
  padding: 200px 0 50px;
  line-height: 2;
`;

export const NextButton = css`
  margin-top: 50px;
  height: 50px;
  width: 387px;
  color: ${Common.colors.white};
  background-color: ${Common.colors.theme};
  border-radius: 5px;

  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    width: 100%;
  }
`;

export const ErrorReason = css`
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.gray01};
  margin: 20px 0 0;
  font-weight: 600;
`;
