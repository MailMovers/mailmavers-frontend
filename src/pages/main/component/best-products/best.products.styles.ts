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
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export const TitleWrapper = styled.div`
  ${globalStyle}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-starts;

`;

export const Title = styled.p`
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
`;

export const BestProductList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

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
`;  

export const ProductImageWrapper = styled.div`
  width: 280px;
  height: 230px;
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
  padding-top: 10px;
  margin-top: 10px;
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ViewBestProductsListButton = styled.a`
  height: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: underline;
  font-size: ${Common.fontSize.fs16};
  font-weight: 700;
  color: ${Common.colors.gray};
`;


export const MenuList = styled.ul`
  width: 500px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;

  font-size: ${Common.fontSize.fs16};
  color: ${Common.colors.gray01};
`;

export const MenuItem = styled.li<{ isActive: boolean }>`
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: ${Common.fontSize.fs20};
  color: ${({ isActive }) => (isActive ? Common.colors.theme : 'initial')};
  background-color: ${({ isActive }) => (isActive ? Common.colors.gray02 : 'initial')};
  &:hover {
    color: ${Common.colors.theme};
    background-color: ${Common.colors.gray02};
  }
`;