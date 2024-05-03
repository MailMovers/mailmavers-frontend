import { css } from '@emotion/react';
import { Common } from 'styles/common';

export const layout = css`
  height: 100%;
`;

export const container = css`
  width: calc(100% - 30px);
  margin: auto;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const logo = css`
  cursor: pointer;
  width: 160px;
`;

export const wrap = css`
  display: flex;
  max-width: 330px;
  margin: 0px auto;
  padding: 60px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const title = css`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const emailAuthenticationBox = css`
  /* min-height: 125px; */
  box-sizing: border-box;
  background: ${Common.colors.white};
  margin: 10px 0;
  padding: 15px 16px;
`;

export const emailAuthenticationTitle = css`
  font-size: 13px;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const emailAuthenticationNumberBox = css`
  border: 1px solid ${Common.colors.red};
  min-height: 45px;
  margin: 10px 0;
  padding: 5px 16px;
  background: ${Common.colors.white};
  border-radius: 5px;
`;

export const emailAuthenticationNumber = css`
  border: none;
  font-size: 15px;
  line-height: 15px;
  flex: 1 0 0px;
  width: 0px;
`;

export const emailAuthenticationNumberBoxFlex = css`
  display: flex;
  align-items: center;
  height: 30px;
  width: 0px;
  justify-content: space-between;
`;

export const emailAuthenticationNumberBtn = css`
  height: 31px;
  width: 45px;
  font-size: 14px;
  border-radius: 5px;
  line-height: 17px;
  padding: 7px 10px;
  box-sizing: border-box;
`;

export const emailAuthenticationTime = css`
  color: ${Common.colors.red};
  margin-right: 15px;
`;

export const socialBtnContainer = css`
  margin: 30px 0px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${Common.colors.gray04};
`;

export const socialBtnTitle = css`
  font-size: 12px;
  text-align: center;
  margin: 15px 0px;
  color: ${Common.colors.gray02};
`;

export const socialBtn = css`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const socialBtnList = css`
  margin: 0px 10px;
`;

export const form = css`
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

export const selectToInputBtn = css`
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 5px;
  }
`;

export const inputGroup = css`
  display: flex;
  input,
  select {
    width: 100%;
    box-sizing: border-box;
    height: 45px;
    padding: 0 15px;
    line-height: 50px;
    border-radius: 4px;
    border: 1px solid ${Common.colors.gray02};
    background-color: ${Common.colors.white};
    color: ${Common.colors.gray};
  }
`;

export const inputLocal = css`
  position: relative;
  flex: 1 1 0px;
`;

export const emailAt = css`
  flex: 0 0 20px;
  text-align: center;
  line-height: 40px;
  color: ${Common.colors.gray};
`;

export const emailDuplicationCheck = css`
  margin-bottom: 30px;
  padding-top: 2px;
  button {
  }
`;

export const formDivDefalutMagin = css`
  margin: 5px 0;
`;

export const passwordRegexGuide = css`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  color: ${Common.colors.gray};
`;

export const header = css`
  font-size: 22px;
  font-weight: 500;
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
  height: 45px;

  border-radius: 8px;
  border: 0;
`;

export const ectForm = css`
  width: 100%;
  padding-top: 8px;

  display: flex;
  justify-content: space-between;

  color: ${Common.colors.black};
  font-size: 14px;
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
  width: 330px;
  height: 50px;

  border-radius: 8px;
  background: ${Common.colors.theme};

  color: ${Common.colors.white};
  font-size: 16px;
  font-weight: 700;
`;

export const emailAuthenticationBtn = css`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  padding: 0px;
  color: ${Common.colors.gray01};
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  background: ${Common.colors.theme};

  color: ${Common.colors.white};
  font-size: 16px;
  font-weight: 700;
`;

export const checkboxGroup = css`
  padding: 18px;
  border: 1px solid ${Common.colors.gray02};
`;

export const checkboxWrap = css`
  display: flex;
  align-items: center;
  width: 100%;
  label {
    align-items: center;
    cursor: pointer;
    display: flex;
  }
`;

export const checkboxBtn = css`
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

export const checkboxBtnClick = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const checkboxInstructions = css`
  flex: 1;
  font-size: 16px;
  line-height: 20px;
  margin-left: 6px;
  color: ${Common.colors.gray};
`;

export const checkboxInstruction = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
`;
