import styled  from "@emotion/styled";
import { Common } from "@/styles/common";
import Modal from 'react-modal';

export const Container = styled.div`
    max-width: 768px;
    width: 375px;
    height: 900px;
    margin: 0 auto;
    margin-top: 70px;
`

export const headerWrapper = styled.div`
    max-width: 470px;
    height: 140px;
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    background-color: white;


    input {
        margin-bottom: 5px;
        width: 100%;
    }
`


export const FontSizeButtonWrapper = styled.div`

`

export const FontSizeButton = styled.button<{ isActive: boolean }>`
  padding: 10px;
  position: relative;
  color: ${({ isActive }) => (isActive ? Common.colors.white : 'initial')};
  background-color: ${({ isActive }) => (isActive ? Common.colors.yellow : 'white')};
  border: 1px solid #ddd;
  width: 50px;
  border-radius: 10px;
  cursor: pointer;

  &#large {
    font-size: 10px;
  }

  &#medium {
    font-size: 10px;
  }

  &#small {
    font-size: 10px;
    width: 60px;

  }

`


export const FormatButtonWrapper = styled.div`


`

export const FormatButton = styled.button<{ isActive: boolean }>`
    font-size: 10px;
    width: 50px;
    height: 30px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: ${({ isActive }) => (isActive ? Common.colors.yellow : 'white')};
`

export const ColorWithFlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const FlexWrapper = styled.div`
    display: flex; // 추가


`

export const FlexButton = styled.button<{ isActive: boolean }>` 
    width: 45px;
    height: 25px;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    background-color: white;
    color: ${({ isActive }) => (isActive ? Common.colors.white : 'initial')};
    background-color: ${({ isActive }) => (isActive ? Common.colors.yellow : 'white')};
    text-align: center;
    display: flex; // 추가
    justify-content: center; // 추가
    align-items: center; // 추가
    font-size: 15px;

`

export const HeaderBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
`


export const PickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 170px;
  margin-top: 5px;

  span {
    margin-left: 5px;
    padding-top: 3px;
  }

`;

export const ColorPicker = styled.input`
  width: 100px;

`;


export const TextAreaWrapper = styled.div`
    height: 460px;
    width: 100%;
    max-width: 315px;
    margin: 0 auto;


` 

export const Content = styled.input`
    width: 100%;
    max-width: 315px;
    height: 27px;
    display: center;
    border: none;
    outline: none;
    vertical-align: bottom; 
    z-index: 0;
    background: transparent;
    padding-right: 5px;
    padding-left: 5px;


`

export const BlankArea = styled.div`
    width: 100%;
    height: 60px;


`

export const ImgWrapper = styled.div`
    background-color: skyblue;
    background-image: url('/images/letter/letterMobile.png');
    background-size: cover;
    background-position: center;
    object-fit: cover;
    object-position: center;
    height: 550px;
    width: 375px;
    border: 1px solid gray;

`


export const FontStyleInput = styled.input`


`

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction:  row;
  width: 375px;
  margin: 0 auto;
  border: 1px solid #ddd;
  height: 50px;
  justify-content: space-between;
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: 0px;
  padding-top: 0px;

`

export const BottomWrapper = styled.div`

`

export const Button = styled.button`
  width: 69px;
  height: 30px;
  margin: 3px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 10px;
  &#save {
    background-color: ${Common.colors.yellow};
    color: white;
  }

  &#summit {
    margin-right: 10px;
    background-color: green;
    color: white;
    width: 80px;


    &:active {
    background-color: ${Common.colors.yellow};
    color: white;
    transform: scale(0.98); 
  }
}

`

export const PageInfo = styled.div`
  width: 60px;
  height: 40px;
  background-color: none;
  padding: 10px;
  color: ${Common.colors.gray};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 10px;
  border-radius: 50%;
  position: absolute;
  left: 157.5px;
  top: 710px;


`


export const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  background: white;
  border-radius: 10px;
  border: 1px solid black;
  padding: 20px;
  max-width: 500px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  h2 {
    margin-bottom: 10px;
    color: #ff0000;
  }

  p {
    margin-bottom: 20px;
    color: #333;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;


