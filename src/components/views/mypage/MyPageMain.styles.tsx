import styled from '@emotion/styled';

export const Wrap = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding-bottom: 15px;

  p {
    color: var(--default, #333);
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media (max-width: 480px) {
    border: none;
    box-shadow: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const InputContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 17px;

  span {
    width: 90px;
    color: var(--default, #333);
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 480px) {
      width: 80px;
    }
  }

  input {
    padding: 13px 0 13px 10px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid var(--greyD9, #d9d9d9);
    outline: none;

    @media (max-width: 480px) {
      width: 200px;
    }
  }

  .info {
    padding: 13px 0 13px 10px;
    width: 280px;
    height: 50px;
    font-size: 18px;
    font-weight: 500;
    color: var(--default, #000);

    @media (max-width: 480px) {
      font-size: 16px;
      width: 200px;
    }
  }
`;

export const Button = styled.button`
  width: 20%;
  height: 50px;
  border-radius: 5px;
  background: var(--primary, #4a743c);
  color: var(--white, #fff);
  font-size: 16px;
  font-weight: 500;
  margin-top: 25px;

  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const ErrorWrap = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: red;
`;

export const EditBtn = styled.div`
  width: 20%;
  height: 40px;
  border-radius: 5px;
  background: var(--primary, #4a743c);
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white, #fff);
  font-size: 12px;
  font-weight: 500;

  :hover {
    cursor: pointer;
  }
`;


