import styled  from "@emotion/styled";
import { Common } from "@/styles/common";

export const Container = styled.div`
    max-width: 768px;
    width: 440px;
    height: 900px;
    margin: 0 auto;
    margin-top: 70px;
`

export const headerWrapper = styled.div`
    max-width: 470px;
    height: 140px;
    width: 100%;
    padding: 20px;
    border: 1px solid red;
    background-color: white;


    input {
        margin-bottom: 5px;
        width: 100%;
    }
`

export const FontSizeBtnWrapper = styled.div`

button {
    height: 30px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    }
`


export const FontStyleBtnWrapper = styled.div`

button {
    width: 30px;
    height: 30px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    }

`

export const HeaderBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    
`


export const PickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 170px;
  order: 1px solid #ddd;

`;

export const ColorPicker = styled.input`
  margin-left: 10px;
  width: 100px;
`;


export const TextAreaWrapper = styled.div`
    border: 1px solid #ddd;
    height: 600px;
    width: 100%;
    max-width: 440px;

` 

export const Content = styled.input`
    width: 100%;
    max-width: 420px;
    height: 40px;
    display: center;
    border: none;
    outline: none;
    vertical-align: bottom; 
    z-index: 0;
    background: transparent;



`

export const BlankArea = styled.div`
    width: 100%;
    margin-top: 60px;

`