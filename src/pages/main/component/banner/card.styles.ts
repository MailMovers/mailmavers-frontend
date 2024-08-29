import styled from "@emotion/styled";
import { Common } from "../../../../styles/common";

export const ContainerWrapper = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center; 
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 24%;
  height: 200px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;



export const CardTitle = styled.div`
  font-size: 18px;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;


  @media (max-width: 768px) {
    font-size: ${Common.fontSize.fs16};
    padding: 0;
  }
`;

export const CardContent = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 10px;


  @media (max-width: 768px) {
    font-size: ${Common.fontSize.fs16};
    padding: 0;
    margin-top: 20px;
    text-align: start;

  }
`;

export const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  @media (max-width: 768px) { 
   width: 60px;
  height: 60px;
  }
`;

export const CardStep = styled.div`
  font-size: ${Common.fontSize.fs24};
  margin-left: 60px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: ${Common.fontSize.fs16};
    padding: 0;
    margin-left: 0px;
    margin-bottom: 0px;
  }

`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;

`

export const FlexContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`