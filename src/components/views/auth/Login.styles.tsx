import styled from '@emotion/styled';
import { Common } from 'styles/common';

export const Layout = styled.div`
  height: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 80px;
    margin-bottom: 30px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid ${Common.colors.gray02};
  box-shadow: 0px 0px 3px 0px ${Common.colors.gray02};
  border-radius: 10px;
  padding: 40px;
  margin-top: 30px;

  @media (max-width: 768px) {
    border: none;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-bottom: 40px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: ${Common.fontSize.fs28};
  color: ${Common.colors.theme};
`;

export const SubTitle = styled.h2`
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.theme};
`;

export const Form = styled.form`
  label {
    display: block;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: ${Common.colors.black};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  input {
    width: 330px;
    box-sizing: border-box;
    height: 50px;
    padding: 0 15px;
    line-height: 50px;
    border-radius: 4px;
    border: 1px solid ${Common.colors.gray02};
    background-color: ${Common.colors.white};
    color: ${Common.colors.gray};
    margin: 5px 0;

    &:focus {
      outline: 1px solid ${Common.colors.theme};
    }
  }
`;

export const InputLocal = styled.div`
  position: relative;
  flex: 1 1 0px;
`;

export const InputForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background: ${Common.colors.white};
  border: 0;
`;

export const EctForm = styled.div`
  width: 100%;
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  color: ${Common.colors.black};
  font-size: ${Common.fontSize.fs14};
  font-weight: 400;
`;

export const LabelInfo = styled.div`
  height: 17px;
  display: flex;
  align-items: center;
  gap: 8px;

  > span {
    color: ${Common.colors.black};
    font-size: 14px;
    font-weight: 400;
  }
`;

export const SubmitBtn = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  padding: 0px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  background: ${Common.colors.theme};
  color: ${Common.colors.yellowgreen};
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0px 0px 10px 0px ${Common.colors.gray02};

  &:hover {
    background-color: ${Common.colors.yellowgreen};
  }
`;

export const SubmitBtnText = styled.span`
  height: 100%;
  font-size: ${Common.fontSize.fs16};
  font-weight: 700;
  color: ${Common.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${Common.colors.theme};
  }
`;

export const SocialBtnContainer = styled.div`
  margin: 30px 0px;
  padding-bottom: 30px;
  padding-top: 10px;
  border-bottom: 1px solid ${Common.colors.gray02};
  border-top: 1px solid ${Common.colors.gray02};
  width: 100%;
`;

export const SocialBtnTitle = styled.h3`
  font-size: ${Common.fontSize.fs14};
  text-align: center;
  margin: 20px 0px;
  color: ${Common.colors.gray};
  font-weight: bold;
`;

export const SocialBtn = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-direction: row;
`;

export const SignUpPageBtn = styled.a`
  width: 330px;
  height: 50px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  border: 1px solid ${Common.colors.theme};
  cursor: pointer;
  color: ${Common.colors.theme};
  &:hover {
    box-shadow: 0px 0px 10px 0px ${Common.colors.gray02};
  }
`;

export const IsMemberPrompt = styled.span`
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.gray01};
  font-weight: bold;
`;