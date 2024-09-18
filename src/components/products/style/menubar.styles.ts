import styled from '@emotion/styled';

export const IconStyle = styled.div`
  font-size: 38px;
  margin-right: 8px;

  #burgerIcon {
    color: green;
    font-size: 48px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  #colorLetter {
    color: red;
    font-size: 48px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  #none {
    color: #888;
    font-size: 48px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  #best {
    color: rgba(255, 5, 255, 1);
    font-size: 48px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  #star {
    color: rgba(255, 255, 23, 1);
    font-size: 48px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

interface MenuItemProps {
  isActive: boolean;
}

export const MenuBarWrapper = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
    height: 100%;
  }
`;

export const MenuList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;

  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  ${({ isActive }) =>
    isActive &&
    `
    font-weight: bold;
    color: blue;
  `}
`;