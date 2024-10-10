import { Common } from "@/styles/common";
import styled from "@emotion/styled";
import Modal from 'react-modal';


export const Container = styled.div`
    width: 900px;
    margin: 0 auto;
    height: 1100px;
    padding: 0px;

    input {
        margin-bottom: 5px;
        width: 100%;
    }

`

export const TextAreaWrapper = styled.div`
    margin : 0 auto;
    width: 700px;
    height: 800px;
    padding-top: 0px;
    margin-top: 50px;

`

export const Content = styled.input`
    width: 700px;
    height: 50px;
    margin : 0 auto;
    padding-left: 10px;
    font-size: 23px; 
    outline: none;
    border: none;
    padding-right: 13px;


    vertical-align: bottom; 
    line-height: 60px; 
    z-index: 0;
    background: transparent;  

`

export const BlankArea = styled.div`
   width: 100%;
   height: 100px;
`


export const ContainerWrapper = styled.div`
  width: 900px;
  height: 1270px;
  margin: 0 auto;
`;

export const ImgWrapper = styled.div`
    background-color: skyblue;
    background-image: url('/images/letter/letterPc.png');
    background-size: cover;
    background-position: center;
    object-fit: cover;
    object-position: center;
    height: 1100px;

`

export const Header = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid #ddd;
  flex-direction: column;
  background-color: white;
`;

export const ColorPicker = styled.input`
  margin-left: 10px;
  width: 70%;
  height: 35px;
  padding: 1px;
`;

export const FontSizeButton = styled.button<{ isActive: boolean }>`
  padding: 10px;
  position: relative;
  color: ${({ isActive }) => (isActive ? Common.colors.white : 'initial')};
  background-color: ${({ isActive }) => (isActive ? Common.colors.yellow : 'white')};
  border: 1px solid #ddd;
  width: 80px;
  cursor: pointer;

  &#large {
    font-size: 21px;
  }

  &#medium {
    font-size: 17px;
  }

  &#small {
    font-size: 13px;
  }
`;

export const FormatButton = styled.button<{ isActive: boolean }>`
  padding: 10px;
  position: relative;
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? Common.colors.yellow : 'white')};

`;


export const FontStyleInput = styled.input`
  width: 71.6%;
  padding: 10px;
  margin: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const FormatButtonWrapper = styled.div`
  display: flex;
`;

export const FontSizeButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FontStyleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  margin-top: 10px;
  height: 40px;
  span {
    font-size: 18px;
    text-align: center;
    margin-top: 7px;
    margin-left: 12px;
    color: red;
    font-weight: 500;
  }

`;


export const FlexWrapper = styled.div`
    margin-left: 105px;

`

export const FlexButton = styled.button<{ isActive: boolean }>`
    height: 50px;
    padding: 10px;
    border: 1px solid #ddd;
    background-color: white;
    color: ${({ isActive }) => (isActive ? Common.colors.white : 'initial')};
    background-color: ${({ isActive }) => (isActive ? Common.colors.yellow : 'white')};

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


export const BottomWrapper = styled.div`
  margin-top : 20;


`

export const Button = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid gray;
  margin-right: 5px;
  margin-left: 10px;
  padding: 15px;
  background-color: white;
  font-size: 16px;
  &#save {

  }

  &#summit {
    margin-right: 10px;
    background-color: green;
    color: white;

    &:active {
    background-color: ${Common.colors.yellow};
    color: white;
    transform: scale(0.98); 
  }

  }


  &:active {
    background-color: ${Common.colors.yellow};
    color: white;
    transform: scale(0.98); 
  }

`



export const FooterWrapper = styled.div`
  display: flex;
  flex-direction:  row;
  width: 900px;
  margin: 0 auto;
  border: 1px solid #ddd;
  height: 100px;
  margin-bottom: 100px;
  justify-content: space-between;
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: 0px;
  padding-top: 0px;
  
  
`

export const PageInfo = styled.div`
  width: 65px;
  height: 65px;
  background-color: #ddd;
  padding: 10px;
  color: ${Common.colors.gray};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 16px;
  border-radius: 50%;



  `
