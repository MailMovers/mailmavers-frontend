'use client';

/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'styles/common';
import { useRecoilValue } from 'recoil';
import { windowSizeWidthAtom } from '@/recoil/width/atom';

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  display?: string;
};

type ButtonTypeProps = {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  display?: string;
};

const Button = ({ children, onClick, type, disabled, backgroundColor, borderColor, color, display }: ButtonProps) => {
  const getWindowWidth = useRecoilValue(windowSizeWidthAtom);
  const isComplete = React.Children.toArray(children).some((child) => child === '작성완료');
  const isMobileWidth = getWindowWidth < 480 && isComplete;

  return (
    <ButtonStyle
      onClick={onClick}
      type={type}
      disabled={disabled}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
      display={display}
      css={isMobileWidth ? completeButtonStyle : undefined}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

const style = (props: ButtonTypeProps) => css`
  font-size: ${Common.fontSize.fs14};
  margin-left: 10px;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: ${props.backgroundColor};
  border: 1px solid ${props.borderColor};
  color: ${props.color};
  display: ${props.display};

  &:disabled {
    background-color: ${Common.colors.gray01};
    border: ${Common.colors.gray01};
    color: ${Common.colors.white};
    cursor: not-allowed;
  }
`;

const ButtonStyle = styled.button`
  ${style}
`;

const completeButtonStyle = css`
  width: calc(100vw - 3em);
  margin-left: 0;
`;
