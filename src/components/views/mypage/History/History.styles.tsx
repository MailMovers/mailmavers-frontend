import styled from '@emotion/styled';

export const Wrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width:768px) {
    margin-top: 60px;
    margin-bottom: 50px;
  }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;

  p {
    color: var(--default, #333);
    font-size: 26px;
    font-weight: 500;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const CardWrap = styled.div<{ isLast?: boolean }>`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  
  &:last-child {
    border-bottom: none;
  }

`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 480px) {
    justify-content: end;
  }
`;

export const StatusWrap = styled.div<{ status: string }>`
  border-radius: 5px;
  width: 100px;
  height: 30px;
  color: #fff;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ status }) => {
    switch (status) {
      case '배송 준비중':
        return `
          background-color: #ACC172;
        `;
      case '배송 완료':
        return `
          background-color: #28a745;
        `;
      case '배송 중':
        return `
          background-color: #8CA252;
        `;
      default:
        return `
          background-color: #6c757d;
        `;
    }
  }}

  @media(max-width:768px) {
    width: 70px;
    height:25px;
  }
`;

export const StatusReviewWrap = styled.div<{ isDone: boolean }>`
  border-radius: 5px;
  width: 100px;
  height: 30px;

  color: #fff;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ isDone }) => (isDone ? '#999' : '#FFB930')};
  cursor: ${({ isDone }) => !isDone && 'pointer'};

  @media(max-width:768px) {
    width: 70px;
    height:25px;
  }
`;

export const CardInfoWrap = styled.div`
  display: flex;
  gap: 20px;

  color: var(--grey666, #666);
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CardInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;

  .address_wrap {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .user_info {
      display: flex;
      gap: 20px;
    }
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #999;
  margin: 80px 0;
  height: 200px;

  @media (max-width: 768px) {
    font-size: 12px;
    height: 100px;
  }
`;