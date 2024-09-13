import styled from '@emotion/styled';

export const Wrap = styled.form`
  width: 100%;
  max-width: 1200px;

  @media (max-width:768px) {
    margin-top: 60px;
    margin-bottom: 50px;
  }
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
    height: 100px;
    border-radius: 0;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: 20px;
  margin-top: 50px;

  p {
    color: var(--default, #333);
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  // @media (max-width: 480px) {
  //   border: none;
  //   box-shadow: none;
  // }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

export const InputContent = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--greyD9, #d9d9d9);
  padding-bottom: 10px;

  input {
    padding: 13px 0 13px 0px;
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--greyD9, #d9d9d9);
    outline: none;
    text-align: center;

    @media (max-width: 480px) {
      width: 200px;
    }
  }

  .info {
    padding: 15px 0 13px 0;
    width: 280px;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: var(--default, #000);

    @media (max-width: 480px) {
      font-size: 16px;
      width: 200px;
    }
  }
`;

export const DataTitle = styled.span`
  width: 90px;
  color: var(--default, #333);
  font-size: 16px;
  font-weight: 400;
`;

export const PasswordChangeBtn = styled.span`
  width: 50px;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: var(--default, #000);
  cursor: pointer;
  border: 1px solid var(--greyD9, #d9d9d9); 
  border-radius: 5px;
  padding-top: 5px;


  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 300px;
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


