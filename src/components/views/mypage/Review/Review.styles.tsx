import styled from '@emotion/styled';
import Image from 'next/image';

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

export const ReviceImage = styled(Image)`
  height: 100%;
  width: 120px;
`;

export const CardInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  color: var(--default, #333);
  font-size: 16px;
  font-weight: 400;

  .score_wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const ScoreWrap = styled.div`
  display: flex;
`;

export const ScoreImage = styled(Image)`
  width: 20px;
  height: 20px;
`;
