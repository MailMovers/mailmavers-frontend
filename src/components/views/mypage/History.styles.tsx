import styled from '@emotion/styled';

export const Wrap = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 590px;
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

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const CardWrap = styled.div<{ isLast?: boolean }>`
  padding: 20px;

  display: flex;
  justify-content: space-between;

  border-radius: 5px;
  border: 1px solid #d9d9d9;
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
          background-color: #dc3545;
        `;
      default:
        return `
          background-color: #6c757d;
        `;
    }
  }}
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
