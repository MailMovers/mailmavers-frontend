import { css } from '@emotion/react';
import { Common } from 'styles/common';

export const styles = {
  Wrap: css`
    position: relative;

    @media all and (min-width: 1200px) {
      min-width: 1200px;
    }
  `,

  DescBox: css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    border-radius: 5px;
    background: ${Common.colors.white};
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border: 1px dashed ${Common.colors.gray01};

    > img {
      position: absolute;
      top: 50px;
    }

    @media all and (max-width: 480px) {
      width: calc(100vw - 3em);
    }
  `,

  InputStyle: css`
    display: none;
  `,

  RequestPhoto: css`
    position: absolute;
    bottom: 10px;
    color: ${Common.colors.gray01};
    font-size: ${Common.fontSize.fs14};
    font-weight: bold;
    margin-bottom: 5px;
  `,
  Desc: css`
    text-align: center;
    color: ${Common.colors.gray01};
    margin-top: 20px;
    line-height: 1.5;
    font-size: ${Common.fontSize.fs14};
  `,
  PhotoList: css`
    width: 1200px;
    border: 1px solid ${Common.colors.gray02};
    padding: 20px;
    margin: 50px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 1199px) {
      width: calc(100vw - 3em);
    }
  `,

  PhotoContainer: css`
    position: relative;
    margin: 10px;
    width: 200px;
    border: 1px solid ${Common.colors.gray02};
  `,

  emptyPhoto: css`
    font-size: ${Common.fontSize.fs14};
    color: ${Common.colors.gray01};
    padding: 40px 0;
  `,

  PreviewImg: css`
    width: 200px;
  `,

  RemoveIcon: css`
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  `,

  Crop: css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.5);
  `,

  CropChild: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 340px;
    height: 300px;
    z-index: 999;

    @media all and (max-width: 480px) {
      width: 100%;
    }
  `,

  CropBtns: css`
    position: fixed;
    bottom: -60px;
    width: 100%;
    height: 40px;
    display: flex;
    gap: 10px;

    > button {
      width: 50%;
      height: 100%;
      font-size: ${Common.fontSize.fs14};
      color: ${Common.colors.white};
      border-radius: 5px;
    }

    @media all and (max-width: 480px) {
      padding: 0 20px;
    }
  `,

  CropCompleteBtn: css`
    background-color: ${Common.colors.theme};
  `,

  CropCloseBtn: css`
    background-color: ${Common.colors.gray01};
    border: none;
    cursor: pointer;
    z-index: 9999;

    @media all and (max-width: 480px) {
      width: calc(100vw - 40px);
    }
  `,
};
