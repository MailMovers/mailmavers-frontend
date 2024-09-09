import styled from '@emotion/styled';
import { Common } from 'styles/common';

export const SocialBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
`;

export const SocialBtn = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Common.colors.gray01};
  border-radius: 50%;
  background-color: ${Common.colors.white};
  

  > img {
    align-items: center;
    justify-content: center;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px ${Common.colors.gray02};
  }
`;

export const KakaoBtn = styled(SocialBtn)`
  background-color: #fee500;
  border: none;
`;

export const SocialText = styled.span`
  display: flex;
  flex-direction: column;
  font-size: ${Common.fontSize.fs14};
  font-weight: 500;
`;

export const ErrorMessage = styled.p`
  color: ${Common.colors.red};
  font-size: ${Common.fontSize.fs12};
`;