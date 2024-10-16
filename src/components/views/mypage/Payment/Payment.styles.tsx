import styled from '@emotion/styled';

export const Wrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
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
      case 'save':
      case 'event':
        return `
          background-color: #ACC172;
        `;
      case 'use':
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

export const CardInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  color: var(--grey666, #666);
  font-size: 14px;
  font-weight: 400;
`;

export const CardInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .desc_wrap {
    display: flex;

    strong {
      font-weight: 600;
    }
    .use {
      color: #dc3545;
    }

    .save,
    .event {
      color: #acc172;
    }

    .user_info {
      display: flex;
      gap: 20px;
    }
  }
`;

export const EmptyMessage = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #999;
  margin: 50px 0;

  @media (max-width: 768px) {
    font-size: 12px;
    height: 200px;
  }
`;
