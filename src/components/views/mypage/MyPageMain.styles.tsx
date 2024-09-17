import styled from '@emotion/styled';
import { Common } from 'styles/common';

export const Wrapper = styled.div`

@media (max-width: 768px) {
  display: none;
}
`;


export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding: 0 20px;
  gap: 20px;
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 10px 0;
`

export const MenuWrapper = styled.div`

`

export const MenuContainer = styled.div`
  border-bottom: 1px dashed lightgray;
  padding: 10px 0;
`
export const HeaderTitle = styled.h2`
font-weight: 700;
font-size: 20px;
margin-bottom: 10px;
color: ${Common.colors.theme};
`

export const MenuTitle = styled.p`
font-weight: 700;
font-size: 18px;
margin-bottom: 8px;
color: ${Common.colors.yellow};
`

export const MenuItem = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`

