import styled from '@emotion/styled';

const globalStyle = {
  padding: '0 100px',
  margin: '0 100px',
}

export const Common = {
    colors: {
      theme: '#4A743C',
      yellowgreen: '#F8F7EA',
      yellow: '#FFB930',
      red: '#F00001',
  
      black: '#333333',
      gray: '#666666',
      gray01: '#999999',
      gray02: '#d9d9d9',
      gray03: '#f3f3f3',
      gray04: '#f6f6f6',
  
      white: '#ffffff',
    },
  
    fontSize: {
      title: '1.88em',
      fs28: '1.80em',
      fs26: '1.63em',
      fs24: '1.50em',
      fs20: '1.25em',
      fs18: '1.13em',
      fs16: '1.00em',
      fs14: '0.88em',
      fs12: '0.75em',
      fs10: '0.63em',
    },
  };


export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;



  }
`;

export const TitleWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Title = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${Common.fontSize.fs28};
  color: ${Common.colors.gray};
  font-weight: 700;

`;


export const BesProductListWrapper = styled.div`
   width: 1200px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BestProductList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;


  }
`;

export const BestProductListTitleWrapper = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
  }
`;  

export const ProductImageWrapper = styled.div`
  width: 280px;
  height: 230px;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductTitle = styled.p`
  
  font-size: ${Common.fontSize.fs20};
`;

export const ProductSubTitle = styled.p`
  margin-top: 3px;
  font-size: ${Common.fontSize.fs16};
`;

export const ProductPrice = styled.p`  
  margin-top: 3px;
  font-size: ${Common.fontSize.fs16};
`;  


export const ProductStarRateWrapper = styled.div`
  margin-top: 3px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;  

export const ProductStarRate = styled.p`
  margin-top: 3px;

  font-size: ${Common.fontSize.fs16};
`;

export const ProductReviewCount = styled.p`
  margin-top: 2px;
  font-size: ${Common.fontSize.fs16};
`;  


export const ViewBestProductsListButtonWrapper = styled.div`
  width: 100%;
  font-size: ${Common.fontSize.fs16};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  margin-left: 16px;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ViewBestProductsListButton = styled.a`
  height: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: ${Common.fontSize.fs16};
  font-weight: 700;
  color: ${Common.colors.gray};
`;


export const MenuList = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: ${Common.fontSize.fs16};
  color: ${Common.colors.gray01};
`;


export const MenuItem = styled.li<{ isActive: boolean }>`
  width: 100px;
  border-radius: 20px 20px 20px 60px;
  margin-top: 20px;
  margin-left: 0;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid ${Common.colors.gray02};
  font-size: ${Common.fontSize.fs20};
  color: ${({ isActive }) => (isActive ? Common.colors.white : 'initial')};
  background: ${({ isActive }) => (isActive ? Common.colors.yellow : 'initial')};
  &:hover {
    background: ${Common.colors.yellow};
    color: ${Common.colors.white};
  }
`;

export const AddIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 5px;
  object-fit: cover;
  font-size: ${Common.fontSize.fs10};
  font-weight: 200;
`;