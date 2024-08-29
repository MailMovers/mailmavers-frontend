import styled from '@emotion/styled';

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
    padding: 0 20px;
  }
`;

export const TitleWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Title = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: ${Common.fontSize.fs28};
  color: ${Common.colors.gray};
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: ${Common.fontSize.fs20};
    justify-content: center;
    padding: 0;
  }
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
    height: auto;
  }
`;

export const BestProductList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: space-around;
  }
`;

export const BestProductListTitleWrapper = styled.div`
  display: flex;
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
    margin: 10;
  }
`;

export const ProductImageWrapper = styled.div`
  width: 300px; 
  height: 250px; 
  padding: 6px;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 180px; 
    padding: 0
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    display: flex;
    padding: 10px;
  }
`;

export const ProductText = styled.p`
  font-size: ${Common.fontSize.fs14}; // 기본 텍스트 크기
  @media (max-width: 768px) {
    font-size: ${Common.fontSize.fs12}; // 작은 화면에서 텍스트 크기 조정
  }
`;

export const ProductTitle = styled(ProductText)`
  font-size: ${Common.fontSize.fs18}; // 텍스트 크기 증가
  @media (max-width: 768px) {
    font-size: ${Common.fontSize.fs16}; // 작은 화면에서 텍스트 크기 조정
  }
`;

export const ProductSubTitle = styled(ProductText)`
  margin-top: 3px;
`;

export const ProductPrice = styled(ProductText)`
  margin-top: 3px;
`;

export const ProductStarRateWrapper = styled.div`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: ${Common.fontSize.fs12}; // 작은 화면에서 텍스트 크기 조정
  }
`;

export const ProductStarRate = styled(ProductText)`
  margin-top: 3px;
`;

export const ProductReviewCount = styled(ProductText)`
  margin-top: 2px;
`;

export const ViewBestProductsListButtonWrapper = styled.div`
  width: 300px;
  font-size: ${Common.fontSize.fs16};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end; 
  @media (max-width: 768px) {
    display : none;
}
`;

export const ViewBestProductsListButton = styled.a`
  padding: 0px 5px;
  border-radius: 10px;
  font-size: ${Common.fontSize.fs16};
  font-weight: 700;
  color: ${Common.colors.gray};
  @media (max-width: 768px) {

  }
`;

export const MenuList = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: ${Common.fontSize.fs16};
  color: ${Common.colors.gray01};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuItem = styled.li<{ isActive: boolean }>`
  width: 100px;
  border-radius: 0px 0px 20px 0px;
  margin-top: 20px;
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
  @media (max-width: 768px) {
    width: 70px;
    height: 40px;
    font-size: ${Common.fontSize.fs12};
    margin-bottom: 10px;
    text-align: center;
    align-items: center;
    padding: 10px;
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

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;