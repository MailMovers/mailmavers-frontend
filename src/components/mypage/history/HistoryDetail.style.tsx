import styled from '@emotion/styled';
import { Common } from 'styles/common';

export const Wrap = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  @media (max-width: 768px) {
    width: calc(100vw - 3em);
    margin-top: 80px;
  }
`;

export const Section = styled.div`
  margin-bottom: 70px;
`;

export const Contents = styled.div`
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

export const InfoLetter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 70px;

  @media all and (max-width: 767px) {
    margin-left: 0;
  }

  > div {
    display: flex;

    @media all and (max-width: 767px) {
      width: 100%;
      flex-direction: column;
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

export const Title = styled.h1`
  font-size: ${Common.fontSize.fs24};
  font-weight: bold;
  margin-bottom: 20px;
  color: ${Common.colors.theme};
`;

export const UserSelect = styled.p`
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

export const UserSelectInfo = styled.p`
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`

export const LetterImg = styled.img`
  width: 170px;
  height: 238px;

  @media all and (max-width: 767px) {
    margin: 15px auto 0;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;

  @media(max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const PhotoImg = styled.img`
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

export const AddressList = styled.div`
  display: flex;
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.gray};
  line-height: 1.4;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AddressPart = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid ${Common.colors.gray02};

  @media (max-width: 768px) {
    font-weight: 550;
  }
`;

export const Address = styled.div`
  margin-left: 50px;

  @media (max-width: 768px) {
    margin: 20px 0 0 0;
  }

  &#sendInfo {
    margin-left: 100px;
    @media (max-width: 768px) {
    margin-left: 0;
    }
  }
`;

export const PointInfo = styled.div`
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

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  width: 20%;
  height: 50px;
  border-radius: 5px;
  background: var(--primary, #4a743c);

  color: var(--white, #fff);
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 50%;
  }
`;