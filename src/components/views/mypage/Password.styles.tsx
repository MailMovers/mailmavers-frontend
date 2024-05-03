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

  p {
    color: var(--default, #333);
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 17px;

  span {
    width: 100px;
    color: var(--default, #333);
    font-size: 16px;
    font-weight: 400;
  }

  input {
    padding: 13px 0 13px 10px;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid var(--greyD9, #d9d9d9);

    outline: none;

    @media (max-width: 480px) {
      width: 200px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: var(--primary, #4a743c);

  color: var(--white, #fff);
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const ErrorWrap = styled.div`
  padding-top: 10px;
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;

  color: #666666;
`;
