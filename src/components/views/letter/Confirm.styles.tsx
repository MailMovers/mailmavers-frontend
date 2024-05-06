import { css } from '@emotion/react';
import { Common } from 'styles/common';

export const styles = {
  Wrap: css`
    @media all and (min-width: 1200px) {
      max-width: 1200px;
      margin: 0 auto;
    }
    @media all and (min-width: 768px) and (max-width: 1199px),
      all and (max-width: 767px) {
      width: calc(100vw - 3em);
      margin: 0 auto;
    }
  `,

  Section: css`
    margin-bottom: 70px;
  `,

  Contents: css`
    padding: 20px;
    border: 1px solid ${Common.colors.gray02};
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;

    @media all and (max-width: 767px) {
      flex-direction: column;
      width: 100%;
    }
  `,

  InfoLetter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;

    @media all and (max-width: 767px) {
      margin-left: 0;
    }

    > div {
      display: flex;

      @media all and (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        margin-left: 0;
      }
    }
  `,

  Title: css`
    font-size: ${Common.fontSize.fs20};
    font-weight: bold;
    margin-bottom: 20px;
    color: ${Common.colors.theme};
  `,

  UserSelect: css`
    width: 150px;
    margin-bottom: 15px;
    font-size: ${Common.fontSize.fs16};
    font-weight: 600;
    margin-right: 8px;

    @media all and (max-width: 767px) {
      width: 100px;
      margin: 15px 0 0 0;
    }
  `,

  LetterImg: css`
    width: 170px;
    height: 238px;

    @media all and (max-width: 767px) {
      margin: 15px auto 0;
    }
  `,

  PhotoContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `,

  PhotoImg: css`
    width: 24%;
    &:first-child {
      margin-left: 0;
    }
    @media all and (max-width: 767px) {
      width: 100%;
      margin: 0 0 20px 0;
    }
  `,

  AddressList: css`
    display: flex;
    font-size: ${Common.fontSize.fs14};
    color: ${Common.colors.gray};
    line-height: 1.4;

    @media all and (min-width: 768px) and (max-width: 1199px),
      all and (max-width: 767px) {
      flex-direction: column;
    }
  `,

  AddressPart: css`
    margin-bottom: 8px;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Common.colors.gray02};
  `,

  Address: css`
    margin-left: 50px;

    @media all and (min-width: 768px) and (max-width: 1199px),
      all and (max-width: 767px) {
      margin: 10px 0 0 0;
    }
  `,

  PointInfo: css`
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      > p {
        &:first-child {
          width: 130px;
          font-weight: 600;
          &:placeholder {
            font-size: 14px;
          }
        }
      }
    }
  `,

  UsePoint: css`
    width: 130px;
    font-size: ${Common.fontSize.fs14};
    padding: 5px 8px;
    margin-right: 8px;
    &:focus {
      outline: none;
    }
  `,
};
