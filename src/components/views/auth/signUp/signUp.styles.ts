import styled from "@emotion/styled";
import { Common } from "styles/common";

export const Layout = styled.div`
  height: 100%;
  background: ${Common.colors.white};
`;

export const Container = styled.div`
  width: 550px;
  margin: auto;
  margin-top: 20px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   border: 1px solid ${Common.colors.theme};
  border: 1px solid lightgray;

  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const Wrap = styled.div`
  display: flex;
  max-width: 400px;
  margin: 0px auto;
  padding: 30px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 30px;
  color: ${Common.colors.theme};
`;

export const Form = styled.form`
  padding-bottom: 30px;
  border-bottom: 1px solid ${Common.colors.gray02};

  label {
    display: flex;
    margin: 20px 0 10px 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: ${Common.colors.theme};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;

  input,
  select {
    width: 100%;
    box-sizing: border-box;
    height: 35px;
    padding: 0 15px;
    line-height: 50px;
    border-radius: 4px;
    border: 1px solid ${Common.colors.gray02};
    background-color: ${Common.colors.white};
    color: ${Common.colors.gray};
  }
`;

export const InputLocal = styled.span`
  position: relative;
  flex: 1 1 0px;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 160px;
`;

export const FormDivDefaultMargin = styled.div`
  margin: 5px 0;
`;

export const PasswordRegexGuide = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  color: ${Common.colors.gray};
`;

export const EmailAuthenticationButton = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  padding: 0px;
  border: 2px solid ${Common.colors.theme};
  border-radius: 4px;
  cursor: pointer;
  background: ${Common.colors.theme};
  color: ${Common.colors.white};
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background: ${Common.colors.white};
    color: ${Common.colors.theme};
  }
`;

export const EmailAt = styled.span`
  flex: 0 0 20px;
  text-align: center;
  line-height: 40px;
  color: ${Common.colors.black};
`;

export const SelectToInputButton = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 1.5px;
    right: 5px;
    background: ${Common.colors.white};
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: ${Common.colors.gray};
  }
`;

export const CheckboxGroup = styled.div`
  padding: 18px;
  border: 1px solid ${Common.colors.gray02};
`;

export const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  label {
    align-items: center;
    cursor: pointer;
    display: flex;
  }
`;

export const CheckboxButton = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  border-color: ${Common.colors.white};
  background-color: ${Common.colors.white};
`;

export const CheckboxButtonClick = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const CheckboxInstructions = styled.span`
  flex: 1;
  font-size: 16px;
  line-height: 20px;
  margin-left: 6px;
  color: ${Common.colors.gray};
`;

export const CheckboxInstruction = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
`;

export const ErrorMessage = styled.p`
  color: ${Common.colors.red};
  font-size: 14px;
  font-weight: 400;
`;
