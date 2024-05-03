import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrap = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  width: 500px;
  height: 500px;

  background-color: #ffff;
  border: 1px solid #ccc;
  z-index: 10;

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    right: 0%;
    bottom: 0%;
    top: 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  padding: 0 16px;

  background: var(--yellow, #ffb930);

  span {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  padding: 16px;
  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  gap: 14px;

  textarea {
    height: 100px;

    padding: 13px 0 13px 10px;
    height: 10px;
    border-radius: 5px;

    outline: none;

    width: 100%;
    height: 300px;

    font-size: 16px;
    resize: none;
    border: 1px solid var(--greyD9, #d9d9d9);

    @media (max-width: 480px) {
      height: 100%;
    }
  }
`;

export const ScoreWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ScoreContent = styled.div`
  display: flex;
`;

export const ScoreImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: end;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 0 16px;

  .cancel {
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: var(--primary, #4a743c);
    color: var(--white, #fff);

    font-size: 16px;
    font-weight: 500;
  }

  .submit {
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: #ffb930;
    color: var(--white, #fff);

    font-size: 16px;
    font-weight: 500;
  }
`;
