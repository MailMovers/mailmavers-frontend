import styled from "@emotion/styled";

import {Common} from "../../../../styles/common";

export const ContainerWrapper = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  background-position: center;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;


`;

export const Card = styled.div`
  width: 23%;
  height: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

`;

export const CardContent = styled.div`
  font-size: 14px;
  color: #666;
`;

export const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const CardStep = styled.div`
  font-size: ${Common.fontSize.fs24};
  color: ${Common.colors.gray};
  padding: 10px;
  font-weight: bold;
`;