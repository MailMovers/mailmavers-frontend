import styled from '@emotion/styled';
import { Common } from "styles/common";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const PageContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-radius: 10px;
  background-image: url('/images/bottom.SVG.png');
  background-size: cover;
  background-position: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PageContent = styled.span<{ selected?: boolean }>`
  font-size: 18px;
  font-weight: 500;
  color: white;
  border-bottom: ${({ selected }) => (selected ? '2px solid white' : '0')};
  font-weight: ${({ selected }) => (selected ? '700' : '500')};
  cursor: pointer;
  text-align: center;

  &:hover {
  font-weight: 700;
  color: white;
  }
`;

export const BodyWrap = styled.div`
  width: 1200px;
  height: 100%;
  padding-bottom: 50px;
  margin-top: 30px;
  border-radius: 10px 10px 0 0;
  border: 1px solid lightgray;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 100%;
  }
`;

export const BodyContent = styled.div`
`;