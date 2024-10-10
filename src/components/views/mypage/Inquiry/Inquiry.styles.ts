import styled from "@emotion/styled";


export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 50px;
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
  border-bottom: 1px solid lightgrey;
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
  border-bottom: 1px solid lightgrey;
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
  width: 1000px;
  min-height: 200px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    max-width: 400px;
  }
`;

export const InfoContainer = styled.div`
  width: 900px;
  display: flex;
  margin-bottom: 50px;

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
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: var(--yellowGreen, #f8f7ea);

  span {
    color: var(--primary, #4a743c);
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .status-span {
    flex:1;
    padding-left: 30px;
    
    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  .category-span {
    flex: 1;
    
    @media (max-width:768px) {
      display: none;
    }
  }

  .title-span {
    flex:3;
    
    @media (max-width: 768px) {
      flex: 2;
    }
  }

  .date-span {
    flex: 1;
    
    @media (max-width: 768px) {
      padding-left: 40px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const CardWrap = styled.div<{ isLast?: boolean }>`
  padding: 20px 0 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--grey666, #666);
  font-size: 14px;
  font-weight: 400;

  border-bottom: ${({ isLast }) => (isLast ? '' : '1px solid #f3f3f3')};
  cursor: pointer;
`;

export const CsDataContainer = styled.div`
  flex: 1;  
  display: flex;
  justify-content: start;
  align-items: center;

  
  &.status {
    padding-left: 20px;
    
    @media(max-width: 768px) {
      padding-left: 5px;
    }
  }
      
  &.category {
    @media (max-width: 768px) {
      display: none;
    }
  }

  &.title {
    flex:3;

    @media (max-width:768px) {
      flex: 2;
      margin-left:10px;
    }
  }

  &.date {
  flex: 1;
  }
  
  @media (max-width: 768px) {
    width: auto;
  }
`
          
export const CsStatus = styled.div<{status: boolean}>`
  width: 70px;
  height: 24px;
  border: 2px solid ${({status}) => status === true ? 'var(--primary, #4a743c)' : 'orange'};
  border-radius: 10px;
  background: ${({status}) => status === true ? 'white' : 'white'};
  color: ${({status}) => status === true ? 'var(--primary, #4a743c)' : 'orange'};
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  padding-top: 2px;

  @media (max-width: 768px) {
    width: 55px;
  }
`;

export const CsCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
  display: none;
  }
`

export const CsTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
    justify-content: start;
  }
`;

export const CsDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
    padding-right: 20px;
  }
`

export const InquireBtn = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;

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
    left: 80%;
    bottom: 20%;

    width: 50px;
    height: 50px;

    span {
      color: #fff;
      font-size: 30px;
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