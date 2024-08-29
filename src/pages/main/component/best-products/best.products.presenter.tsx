import * as S from "./best.products.styles";
import { MainPageUIProps } from "@/type/main"; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useMediaQuery } from "react-responsive";

const pcResponsive = {
  0: { items: 2 },
  768: { items: 4 },
  1024: { items: 4 }
};

const mobileResponsive = {
  0: { items: 1 },
  768: { items: 2 },
};

const icon = {
  add: '/icon/plus.png',
};

export default function BestProductsUI(props: MainPageUIProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const carouselItems = props.items.map((mockData, id) => (
    <S.ProductWrapper key={id}>
      <S.ProductImageWrapper>
        <S.ProductImage src={mockData.productImage} alt='메인 이미지' />
      </S.ProductImageWrapper>
      <S.ProductTitle>{mockData.productTitle}</S.ProductTitle>
      <S.ProductSubTitle>{mockData.productSubTitle}</S.ProductSubTitle>
      <S.ProductPrice>{mockData.productPrice}</S.ProductPrice>
      <S.ProductStarRateWrapper>
        <S.ProductStarRate>{mockData.productStarRate}</S.ProductStarRate>
        <S.ProductReviewCount>{mockData.productReviewCount}</S.ProductReviewCount>
      </S.ProductStarRateWrapper>
    </S.ProductWrapper>
  ));

  return (
    <S.ContainerWrapper>
      <S.TitleWrapper>
        <S.Title>이번달 인기상품</S.Title>
        <S.MenuList>
          {['흑백', '컬러', '카드', '엽서'].map(category => (
            <S.MenuItem 
              key={category} 
              onClick={() => props.onCategoryChange(category)} 
              isActive={props.selectedCategory === category}
            >
              {category}
            </S.MenuItem>
          ))}
        </S.MenuList>
      </S.TitleWrapper>
      <S.BesProductListWrapper>
        <S.ViewBestProductsListButtonWrapper>
          <S.ViewBestProductsListButton onClick={() => props.goLetterProducts()}>
            전체보기 
            <S.AddIcon src={icon.add} alt='추가' />
          </S.ViewBestProductsListButton>
        </S.ViewBestProductsListButtonWrapper>
        <S.BestProductList>
          <AliceCarousel 
            items={carouselItems} 
            responsive={isMobile ? mobileResponsive : pcResponsive}
            autoPlay
            autoPlayInterval={4000}
            infinite
            disableButtonsControls
          />
        </S.BestProductList>
      </S.BesProductListWrapper>
    </S.ContainerWrapper>
  );
}