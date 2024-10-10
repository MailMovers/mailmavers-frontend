import styled from '@emotion/styled';

export const Wrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;

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
  flex-direction: row;
  justify-content: center;
  gap: 60px;
  margin-top: 30px;

  p {
    color: var(--default, #333);
    font-size: 26px;
    font-weight: 500;
  }

  @media(max-width: 768px) {
    gap: 20px;
  }
`;

export const InfoContaier = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InfoWrap = styled.div`
  width: 450px;
  min-height: 400px;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  background: var(--yellowgreen, #f8f7ea);

  span {
    color: var(--primary, #4a743c);
    font-size: 16px;
    font-weight: 500;
  }

  .anticon {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    span {
      font-size: 12px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardWrap = styled.div<{ isLast?: boolean }>`
  padding: 20px 10px 20px 20px;

  display: flex;
  justify-content: space-between;
  align-items: top;

  color: var(--grey666, #666);
  font-size: 14px;
  font-weight: 400;

  border-bottom: ${({ isLast }) => (isLast ? '' : '1px solid #f3f3f3')};

  .text_container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .text_wrap {
      display: flex;
      gap: 20px;
      font-weight: 450;
      font-size: 16px;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 2px;
        font-size: 12px;
      }
    }

    .addr_container {
      font-size: 12px;
      font-weight: 400;

      @media (max-width: 768px) {
      font-size: 10px;
      }
    }

    @media (max-width: 768px) {
      flex: 5;
    }
  }

  .del_btn {
    width: 50px;
    height: 25px;
    text-align: center;
    cursor: pointer;
    background-color: orange;
    color: white;
    padding-top: 4px;
    border-radius: 2px;

    @media(max-width: 768px) {
      flex: 1;
      height: 15px;
      font-size: 10px;
      padding-top: 1.5px;
    }
  }
`;

export const EmptyMessage = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #999;
  margin: 100px 0 0 0;

  @media (max-width: 768px) {
    height: 50px;
    font-size: 12px;
  }
`;
