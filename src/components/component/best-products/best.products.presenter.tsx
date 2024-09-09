import * as S from "./best.products.styles";
import { MainPageUIProps } from "@/type/main"; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from "react";
import { useMoveToPage } from "@/hooks/useMoveToPage"

const pcResponsive = {
  0: { items: 2 },
  768: { items: 2 },
  1024: { items: 4 }
};

const mobileResponsive = {
  0: { items: 2 },
  768: { items: 2 },
};

const icon = {
  add: '/icon/plus.png',
};

export default function BestProductsUI(props: MainPageUIProps) {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
    const { onClickMoveToPage } = useMoveToPage();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 초기값 설정
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const carouselItems = props.items.map((mockData, id) => (
    <S.ProductWrapper key={id} onClick={onClickMoveToPage(`/letter-product-detail${id}`)}>
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
        <S.FlexWrapper>
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
          <S.ViewBestProductsListButtonWrapper>
            <S.ViewBestProductsListButton onClick={onClickMoveToPage("/letterproducts")}>
              전체보기 
              <S.AddIcon src={icon.add} alt='추가' />
            </S.ViewBestProductsListButton>
          </S.ViewBestProductsListButtonWrapper>
        </S.FlexWrapper>
      </S.TitleWrapper>
      <S.BesProductListWrapper>
        <S.BestProductList>
          <AliceCarousel 
            items={carouselItems} 
            responsive={isMobile ? mobileResponsive : pcResponsive}
            autoPlay
            autoPlayInterval={4000}
            infinite
            disableButtonsControls
            disableDotsControls 
          />
        </S.BestProductList>
      </S.BesProductListWrapper>
      {isMobile && <S.AddButton onClick={onClickMoveToPage("/letterproducts")}>더 보기</S.AddButton>}
    </S.ContainerWrapper>
  );
}