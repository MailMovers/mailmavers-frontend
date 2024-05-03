import { css } from '@emotion/react';
import { Common } from 'styles/common';

export const socialBtnWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
`;

export const socialBtn = css`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Common.colors.gray01};
  border-radius: 5px;
  background-color: ${Common.colors.white};

  > img {
    position: absolute;
    left: 20px;
  }
`;

export const kakao = css`
  background-color: #fee500;
  border: none;
`;

export const socialText = css`
  display: flex;
  flex-direction: column;

  font-size: ${Common.fontSize.fs14};
  font-weight: 500;
`;

export const errorMessage = css`
  color: ${Common.colors.red};
  font-size: ${Common.fontSize.fs14};
`;
