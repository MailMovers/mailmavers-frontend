import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'styles/common';

export const Wrap = css`
  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }
  @media all and (min-width: 768px) and (max-width: 1199px), all and (max-width: 767px) {
    width: calc(100vw - 3em);
    margin: 0 auto;
  }
`;

export const Section = css`
  margin-bottom: 70px;
`;

export const Contents = css`
  padding: 20px;
  border: 1px solid ${Common.colors.gray02};
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;

  @media all and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const InfoLetter = css`
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
`;

export const Title = css`
  font-size: ${Common.fontSize.fs20};
  font-weight: bold;
  margin-bottom: 20px;
  color: ${Common.colors.theme};
`;

export const UserSelect = css`
  width: 150px;
  margin-bottom: 15px;
  font-size: ${Common.fontSize.fs16};
  font-weight: 600;
  margin-right: 8px;

  @media all and (max-width: 767px) {
    width: 100px;
    margin: 15px 0 0 0;
  }
`;

export const LetterImg = css`
  width: 170px;
  height: 238px;

  @media all and (max-width: 767px) {
    margin: 15px auto 0;
  }
`;

export const PhotoContainer = css`
  display: flex;
  flex-wrap: wrap;
`;

export const PhotoImg = css`
  width: 25%;
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
  @media all and (max-width: 767px) {
    width: 100%;
    margin: 0 0 20px 0;
  }
`;

export const AddressList = css`
  display: flex;
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.gray};
  line-height: 1.4;

  @media all and (min-width: 768px) and (max-width: 1199px), all and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const AddressPart = css`
  margin-bottom: 8px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid ${Common.colors.gray02};
`;

export const Address = css`
  margin-left: 50px;

  @media all and (min-width: 768px) and (max-width: 1199px), all and (max-width: 767px) {
    margin: 10px 0 0 0;
  }
`;

export const PointInfo = css`
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
`;

export const UsePoint = css`
  width: 130px;
  font-size: ${Common.fontSize.fs14};
  padding: 5px 8px;
  margin-right: 8px;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: var(--primary, #4a743c);

  color: var(--white, #fff);
  font-size: 16px;
  font-weight: 500;
`;
