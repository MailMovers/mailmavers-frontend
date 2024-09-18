import styled from '@emotion/styled';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Common } from '@/styles/common';


export const Frame = styled.div`
  width: 1200px;
  height: 85px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 768px) {
    background-color: #fffff0;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    justify-content: space-between;
    padding: 0 1.5em;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (min-width: 1200px) {
    min-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    padding: 0;
  }

  @media all and (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;

export const MobileFrame = styled.div`
  position: fixed;
  inset: 0px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #fff;
  z-index: 11;
`;

export const MobileTop = styled.div`
  height: 85px;
  width: 100%;
  padding: 0 1.2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
`;

export const MoblileBody = styled.div`
  height: calc(100% - 85px);
  display: flex;
  flex-direction: column;
`;

export const MyInfo = styled.div`
  padding: 15px;
  color: var(--default, #333);
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const Menu = styled.div`
  padding: 15px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid rgba(232, 232, 232, 1);

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  height: 60px;
  cursor: pointer;
  padding-left:20px;

  @media(max-width: 768px) {
    height: 36px;
    margin: 0;
    padding: 0;
  }
`;

export const MenuIcon = styled(MenuOutlined)`
  @media(max-width: 768px) {
    font-size: 20px;
    margin-right: 0px;
  }
  font-size: 33px;
  color: #888;
  margin-right: 30px;

`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-right: 20px;

  @media(max-width: 768px) {
    margin-right: 0;
  }
`;

export const MobileBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;

  @media(max-width: 768px) {
    width: 100%;
    font-size: 14px;
    gap: 1em;
  }
`;

export const button = styled.span`
  padding: 0.5em 1em;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  @media(max-width: 768px) {
    display: none
  }
`;

export const button2 = styled.span`
    background: ${Common.colors.yellow};
    padding: 0.5em 1em;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media(max-width: 768px) {
    display: none
  }
`

// 모바일 메뉴 스타일들
export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

