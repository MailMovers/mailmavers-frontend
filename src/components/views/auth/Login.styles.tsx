import { css } from '@emotion/react';
import { Common } from 'styles/common';

// TODO :글로벌 스타일로 변경하여 layout으로 잡을 것
export const layout = css`
  height: 100%;
  margin-top: 10px;
`;

export const wrap = css`
  display: flex;
  max-width: 330px;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 0px;
`;

export const titleContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  gap: 10px;
`;

export const title = css`
  font-size: ${Common.fontSize.fs28};
  color: ${Common.colors.theme};
`;

export const subTitle = css`
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.theme};
`;

export const form = css`
  label {
    display: block;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: ${Common.colors.black};
  }
`;

export const inputGroup = css`
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

export const inputLocal = css`
  position: relative;
  flex: 1 1 0px;
`;

export const inputForm = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const input = css`
  width: 100%;
  height: 50px;

  border-radius: 8px;
  background: ${Common.colors.white};
  border: 0;
`;

export const ectForm = css`
  width: 100%;
  padding-top: 8px;

  display: flex;
  justify-content: space-between;
  color: ${Common.colors.black};
  font-size: ${Common.fontSize.fs14};
  font-weight: 400;
`;

export const labelInfo = css`
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

export const submitBtn = css`
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

export const submitBtnText = css`
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

export const socialBtnContainer = css`
  margin: 30px 0px;
  padding-bottom: 30px;
  padding-top: 10px;
  border-bottom: 1px solid ${Common.colors.gray02};
  border-top: 1px solid ${Common.colors.gray02};
  width: 100%;
`;

export const socialBtnTitle = css`
  font-size: ${Common.fontSize.fs14};
  text-align: center;
  margin: 20px 0px;
  color: ${Common.colors.gray};
  font-weight: bold;
`;

export const socialBtn = css`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-direction: row;
`;

export const signUpPageBtn = css`
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

export const isMemberPrompt = css`
  font-size: ${Common.fontSize.fs14};
  color: ${Common.colors.gray01};
  font-weight: bold;
`;
