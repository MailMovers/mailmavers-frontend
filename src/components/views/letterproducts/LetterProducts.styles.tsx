import { css } from '@emotion/react';
import { Common } from 'styles/common';

export const ProductsWrap = css`
  border-top: 1px solid ${Common.colors.gray04};

  @media all and (min-width: 1200px) {
    min-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    min-width: 768px;
  }

  @media all and (max-width: 767px) {
    min-width: 295px;
    border-top: none;
  }
`;

export const ProductsPage = css`
  margin: 0 auto;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin-top: 2.69em;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 3em;
    margin-top: 2.69em;
  }
`;

export const ProductsTapWrap = css`
  display: flex;

  @media all and (min-width: 1200px) {
    gap: 1.5em;
    height: 1.58em;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    gap: 1.5em;
    height: 1.58em;
  }

  @media all and (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const ProductTab = css`
  @media all and (min-width: 1200px) {
    padding: 0;
    margin-bottom: 0.31em;
    font-size: ${Common.fontSize.fs16};
    color: ${Common.colors.gray};
    background: transparent;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0;
    margin-bottom: 0.31em;
    font-size: ${Common.fontSize.fs16};
    color: ${Common.colors.gray};
    background: transparent;
  }

  @media all and (max-width: 767px) {
    width: 25%;
    height: 3.13em;
    padding: 0;
    font-size: ${Common.fontSize.fs16};
    color: ${Common.colors.theme};
    background: ${Common.colors.yellowgreen};
  }
`;

export const ActiveTab = css`
  @media all and (min-width: 1200px) {
    padding: 0;
    padding-bottom: 0.31em;
    font-size: ${Common.fontSize.fs16};
    color: ${Common.colors.theme};
    border-bottom: 2px solid ${Common.colors.theme};
    background: transparent;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0;
    padding-bottom: 0.31em;
    font-size: ${Common.fontSize.fs16};
    color: ${Common.colors.theme};
    border-bottom: 2px solid ${Common.colors.theme};
    background: transparent;
  }

  @media all and (max-width: 767px) {
    width: 25%;
    height: 3.13em;
    padding: 0;
    font-size: ${Common.fontSize.fs16};
    color: ${Common.colors.white};
    background: ${Common.colors.theme};
  }
`;

export const PageTitle = css`
  margin: 4.06em 0 2.56em 0;
  color: ${Common.colors.black};
  font-weight: 500;
  text-align: center;

  @media all and (min-width: 1200px) {
    font-size: ${Common.fontSize.fs26};
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${Common.fontSize.fs24};
  }

  @media all and (max-width: 767px) {
    font-size: ${Common.fontSize.fs20};
  }
`;

export const ProductsList = css`
  display: grid;

  @media all and (min-width: 1200px),
    all and (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(auto-fill, minmax(17.81em, 1fr));
    gap: 3.75em 1.25em;
    place-items: center;
  }

  @media all and (max-width: 767px) {
    place-items: center;
    gap: 3.75em;
  }
`;

export const ProductsItem = css`
  width: 17.81em;
  cursor: pointer;
`;

export const ProductImgWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 11.81em;
  overflow: hidden;
  border-radius: 0.31em;
`;

export const Img = css`
  width: 100%;
`;

export const ProductTitle = css`
  margin-top: 0.75em;
  margin-bottom: 0.38em;
  color: ${Common.colors.black};
  font-size: ${Common.fontSize.fs16};
  font-weight: 400;
`;

export const ProductDetail = css`
  width: 100%;
  color: ${Common.colors.gray};
  font-size: ${Common.fontSize.fs16};
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PageNumberWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.56em;
  margin-bottom: 5.44em;
`;

export const PageNumber = css`
  display: flex;
  gap: 1em;
`;

export const ButtonsWrap = css`
  display: flex;
  justify-content: center;
  gap: 0.1em;
`;

export const Button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  width: 1.88em;
  height: 1.88em;
  color: ${Common.colors.gray01};
  font-size: ${Common.fontSize.fs14};
  font-weight: 400;
  background: transparent;
  cursor: pointer;
`;

export const ActiveButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.88em;
  height: 1.88em;
  padding-bottom: 2px;
  border: 1px solid ${Common.colors.theme};
  border-radius: 5px;
  color: ${Common.colors.theme};
  font-size: ${Common.fontSize.fs14};
  font-weight: 400;
  background: transparent;
  cursor: pointer;
`;

export const NotProductWrap = css`
  display: flex;
  justify-content: center;
  padding-top: 6em;
  width: 100%;
  height: 33.75em;
`;

export const NotProduct = css`
  color: ${Common.colors.gray01};
  font-size: ${Common.fontSize.fs28};
  font-weight: 600;
`;
