import styled from '@emotion/styled';

export const Wrap = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;

`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid lightgray;
  border-radius: 10px 10px 0 0;
  background-image: url('/images/bottom.SVG.png');
  background-size: cover;
  background-position: top;

  @media (max-width: 768px) {
    border-radius: 0;
    margin-top: 70px;
  }
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const SubTitle = styled.div`
  font-size: 26px;
  font-weight: 400;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const TitleContent = styled.span`
  font-size: 26px;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  margin-top: 60px;

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
  gap: 20px;
`;

export const InputContent = styled.div`
  width: 100%;
  height: 50px;
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
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--greyD9, #d9d9d9);

    outline: none;

    @media (max-width: 480px) {
      width: 200px;
    }
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  background: var(--primary, #4a743c);
  margin-top: 40px;

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
  font-size: 14px;
  color: red;
`;
