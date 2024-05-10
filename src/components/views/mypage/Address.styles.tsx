import styled from '@emotion/styled';

export const Wrap = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Content = styled.div`
  width: 100%;
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

export const InfoContaier = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InfoWrap = styled.div`
  width: 450px;
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

  .text_container {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .text_wrap {
      display: flex;
      gap: 20px;
    }
  }

  .del_btn {
    width: 40px;
    text-align: center;
    cursor: pointer;
  }
`;
