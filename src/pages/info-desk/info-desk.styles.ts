import styled from '@emotion/styled';
import { Common } from '@/styles/common';

export const Container = styled.div`
  padding: 20px;
  width: 1200px;
  height: 730px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
`;

export const CategoryItem = styled.div<{ selected: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  border-bottom: ${({ selected }) => (selected ? '2px solid black' : 'none')};
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 5px;
    display: flex;
    font-size: 13px;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const FAQCard = styled.div`
  width: 30%;
  height: 270px;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 40%;
    height: 230px;
  }
`;

export const FAQQuestion = styled.p`
  font-weight: bold;
  margin-bottom: 10px;  
  padding: 20px ;

  
  @media (max-width: 768px) {

    padding: 5;
  }
`;

export const FAQTags = styled.div`
  display: flex;
  gap: 5px;
  padding: 12px;
  border-radius: 20px 20px 0px 0px;
  margin-bottom: 20px;
  background: ${Common.colors.theme};

  @media (max-width: 768px) {
    margin:  0;
  }
`;

export const FAQTag = styled.span`
  background-color: ${Common.colors.yellow};
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: ${Common.colors.white};

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 3.5px;
  }
`;

export const Title = styled.h1` 
    font-size: ${Common.fontSize.fs28};
    color: ${Common.colors.yellow};
    font-weight: 700;   
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${Common.colors.gray};
    margin-top: 20px;
    margin-bottom: 20px;
`;  

export const Line = styled.div`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;


export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InfoWrapper = styled.div`
  width: 100%;


`

export const InfoText = styled.text`

`

export const InfoIcon = styled.img`

`

export const InfoDescription = styled.text`
`

export const InfoBtn = styled.button`

`