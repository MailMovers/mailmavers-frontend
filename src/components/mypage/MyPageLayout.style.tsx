import styled from '@emotion/styled';

export const Wrap = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 50px;
`;

export const TopWrap = styled.div`
  width: 100%;
  height: 100px;
  background: #f6f6f6;

  @media all and (min-width: 768px) and (max-width: 1199px) {
  }
`;

export const TopContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 2em 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const TopTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  `;
  
  export const TopTitle = styled.div`
  color: var(--default, #333);
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 40px;
`;

export const PageContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }

  .page_responsive {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const PageContent = styled.span<{ selected?: boolean }>`
  cursor: pointer;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ selected }) => (selected ? '#63794d' : '#333')};
  border-bottom: ${({ selected }) => (selected ? '2px solid #63794d' : '0')};
`;

export const BodyWrap = styled.div`
  width: 100%;
  height: calc(100% - 150px);
  display: flex;
  justify-content: center;
`;

export const BodyContent = styled.div`
  min-width: 360px;
  padding-top: 50px;
`;
