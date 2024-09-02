import styled from '@emotion/styled';
import { Common } from "styles/common";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const Container = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  height: 450px;
  margin-left: 30px;
  padding: 15px;
  border-radius: 10px;
`;

export const TopContent = styled.div`
`;

export const TopTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  `;

export const PageContent = styled.span<{ selected?: boolean }>`
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? '#63794d' : '#333')};
  border-bottom: ${({ selected }) => (selected ? '2px solid #63794d' : '0')};
  cursor: pointer;

  &:hover {
  font-weight: 600;
  }
 `;

export const BodyWrap = styled.div`
  width: 1200px;
  height: 600px;
  padding: 0;
  margin: 0;
  margin-right: 50px;
  border: 1px solid lightgray;
`;

export const BodyContent = styled.div`

  padding: 20px;
`;