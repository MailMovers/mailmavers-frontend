import { css } from '@emotion/react';
import { Common } from 'styles/common';

export const Wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LetterInfo = css`
  margin-bottom: 30px;
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.gray01};
`;

export const Page = css`
  margin: 30px 0 10px;
  text-align: center;
  font-size: ${Common.fontSize.title};
  font-weight: bold;
`;

export const ButtonSection = css`
  display: flex;
  width: 694px;
  margin: 20px auto 0;
  justify-content: space-between;
  > button {
    margin-left: 0;
  }

  @media all and (max-width: 767px) {
    width: calc(100vw - 3em);
  }

  @media all and (max-width: 480px) {
    width: calc(100vw - 3em);
    margin-bottom: 10px;
  }
`;

export const Buttons = css`
  text-align: right;
`;

export const DesktopText = css`
  @media all and (max-width: 480px) {
    display: none;
  }
`;

export const MobileText = css`
  @media all and (min-width: 481px) {
    display: none;
  }
`;
