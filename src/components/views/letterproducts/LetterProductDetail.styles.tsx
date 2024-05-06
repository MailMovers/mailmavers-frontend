import { css } from '@emotion/react';
import { Common } from 'styles/common';
import styled from '@emotion/styled';

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
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 3em;
  }
`;

export const ProductsPageMobile = css`
  @media all and (max-width: 767px) {
    padding: 0 1.5em;
  }
`;

export const MobileTabWrap = css`
  @media all and (min-width: 1200px),
    all and (min-width: 768px) and (max-width: 1199px) {
    padding-top: 2.69em;
  }
`;

export const IconWrap = css`
  display: flex;
  justify-content: end;
  gap: 0.5em;
`;

export const Hidden = css`
  display: none;
`;

export const TabTitle = css`
  padding-top: 3.3em;
  color: ${Common.colors.black};
  font-size: ${Common.fontSize.fs20};
  font-weight: 500;
`;

export const Product = css`
  display: flex;
  gap: 1.25em;
  padding-top: 2.13em;
  padding-bottom: 6.25em;
  border-bottom: 1px solid ${Common.colors.gray03};

  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ProductDescripWrap = css`
  display: flex;
  gap: 1.25em;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    flex-direction: column;
  }

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ProductContent = css`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 36.88em;
    height: 30.63em;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 30.63em;
  }

  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 30.63em;
  }
`;

export const ProductPrevImgWrap = css`
  @media all and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1.25em;
    width: 5.13em;
  }

  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    display: grid;
    grid-template-columns: 16.73% 16.73% 16.73% 16.73% 16.73%;
    gap: 4.0825%;
  }
`;

export const ProductPrevImg = styled.li<{ imgWidth: number | null }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media all and (min-width: 1200px) {
    width: 5.13em;
    height: 5.13em;
  }

  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    width: 100%;
    ${({ imgWidth }) => (imgWidth === null ? null : `height: ${imgWidth}px;`)}
  }
`;

export const Img = css`
  width: 100%;
`;

export const EmptyImg = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 600;
  color: ${Common.colors.gray01};
  background: ${Common.colors.gray04};

  @media all and (min-width: 1200px),
    all and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${Common.fontSize.fs24};
  }

  @media all and (max-width: 767px) {
    width: 100%;
    font-size: ${Common.fontSize.fs16};
  }
`;

export const DescriptionImg = css`
  width: 100%;
`;

export const FirstImg = styled.div<{ windowSizeWidth: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media all and (min-width: 1200px) {
    width: 30.63em;
    height: 30.63em;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    height: ${({ windowSizeWidth }) => `${windowSizeWidth - 6 * 16}px`};
  }

  @media all and (max-width: 767px) {
    width: 100%;
    height: ${({ windowSizeWidth }) => `${windowSizeWidth - 3 * 16}px`};
  }
`;

export const ButtonYellowGreen = css`
  width: 100%;
  height: 3.75em;
  border-radius: 0.31em;
  border: 1px solid ${Common.colors.gray03};
  background: ${Common.colors.yellowgreen};
  color: ${Common.colors.theme};
  font-size: ${Common.fontSize.fs18};
  font-weight: 400;

  &:hover {
    background: ${Common.colors.theme};
    color: ${Common.colors.white};
  }

  @media all and (max-width: 767px) {
    margin-top: 1.5em;
  }
`;

export const ScrollNavHeight = css`
  height: 4.25em;
`;

export const ButtonWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailProduct = css`
  margin-top: 5.63em;
  margin-bottom: 4.38em;

  @media all and (max-width: 767px) {
    padding: 0 1.5em;
  }
`;

export const TableName = css`
  width: 5.56em;
  color: ${Common.colors.black};
  font-weight: 400;

  @media all and (min-width: 1200px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (max-width: 767px) {
    font-size: ${Common.fontSize.fs14};
  }
`;

export const TdBottom = css`
  padding-bottom: 0.88em;
`;

export const Table = css`
  margin-bottom: 1.8em;
`;

export const TableContent = css`
  color: ${Common.colors.gray};
  font-weight: 400;

  @media all and (min-width: 1200px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (max-width: 767px) {
    font-size: ${Common.fontSize.fs14};
    line-height: 1.6em;
  }
`;

export const Title = css`
  margin-bottom: 0.31em;
  color: ${Common.colors.black};
  font-size: ${Common.fontSize.fs26};
  font-weight: 500;
`;

export const SubTitle = css`
  margin-bottom: 1.75em;
  color: ${Common.colors.gray};
  font-size: ${Common.fontSize.fs16};
  font-weight: 400;
`;

export const PriceWrap = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.22em;
`;

export const Price = css`
  display: block;
  color: ${Common.colors.black};
  font-size: ${Common.fontSize.title};
  font-weight: 700;
`;

export const PriceUnit = css`
  font-weight: 400;

  @media all and (min-width: 1200px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (max-width: 767px) {
    font-size: ${Common.fontSize.fs14};
    line-height: 1.6em;
  }
`;

export const FirstPrice = css`
  margin-bottom: 0.6em;
  color: ${Common.colors.gray01};
  font-weight: 400;

  @media all and (min-width: 1200px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (max-width: 767px) {
    font-size: ${Common.fontSize.fs14};
    line-height: 1.6em;
  }
`;
