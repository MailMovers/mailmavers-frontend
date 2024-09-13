import styled from "@emotion/styled";


export const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  @media (max-width: 480px) {
    max-width: 400px;
  }
`;

export const Header = styled.div`
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

export const TitleContainer = styled.div`
  width: 100%;
  height: 150px;
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

export const Body = styled.div`
  margin-top: 50px;
  width: 1000px;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    max-width: 400px;
  }
`;

export const InfoContaier = styled.div`
  width: 650px;
  display: flex;
  gap: 50px;

  @media (max-width: 480px) {
    max-width: 400px;
    padding: 0 20px;
  }
`;

export const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardWrap = styled.div<{ isLast?: boolean }>`
  padding: 20px 10px 20px 20px;

  display: flex;
  justify-content: space-between;
  align-items: end;

  color: var(--grey666, #666);
  font-size: 14px;
  font-weight: 400;

  border-bottom: ${({ isLast }) => (isLast ? '' : '1px solid #f3f3f3')};
  cursor: pointer;

  .text_container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .text_wrap {
      display: flex;
      gap: 20px;
      color: var(--grey666, #666);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }

  .created_at {
    display: flex;
    gap: 20px;
    border: 1px solid bl;

    color: var(--grey666, #666);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  .del_btn {
    cursor: pointer;
  }
`;

export const InquireBtn = styled.div`
  position: fixed;
  bottom: 5%;
  left: 90%;

  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;
  background: var(--yellow, #ffb930);

  z-index: 8;

  cursor: pointer;

  span {
    color: #fff;
    font-size: 50px;
  }

  @media all and (max-width: 480px) {
    left: 75%;
    bottom: 10%;

    width: 50px;
    height: 50px;

    span {
      color: #fff;
      font-size: 30px;
    }
  }
`;
