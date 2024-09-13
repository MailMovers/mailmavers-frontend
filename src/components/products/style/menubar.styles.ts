import styled from '@emotion/styled';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { AiOutlineFile } from 'react-icons/ai';
import { SiTinyletter } from 'react-icons/si';
import { FaStar } from 'react-icons/fa';

export const IconStyle = styled.div`
  font-size: 38px;
  margin-right: 8px;

  #burgerIcon {
    color: green;
    font-size: 48px;
  }

  #colorLetter {
    color: red;
    font-size: 48px;
  }

  #none  {
    color: 888;
    font-size: 48px;
  }

  #best {
    color: rgba(255,5,255, 255);
    font-size: 48px;
  }

  #star {
    color: rgba(255,255,23);
    font-size: 48px;
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
`;

export const MenuList = styled.div`
  width: 100%;
  height : auto;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;

`


export const MenuItem = styled.div<MenuItemProps>`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${props => (props.isActive ? '' : '')};

`;

export const MenuIcon = styled.div`
  margin-bottom: 10px;

`;

export const MenuText = styled.div`
  font-size: 16px;
  color: #333;
`;