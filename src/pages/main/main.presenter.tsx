import * as S from "./main.styles"
import { MainPageUIProps } from "@/type/main"; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const pcResponsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 4 }
};

const items = [
  {
    id: 1,
    productImage: '/images/main_img.svg',
    productTitle: '인기상품',
    productSubTitle: '오늘의 인기상품을 둘러보세요',
    productPrice: '5,000원',
    productStarRate: '5.0',
    productReviewCount: '총 리뷰(100)',
  },
  {
    id: 2,
    productImage: '/images/main_img.svg',
    productTitle: '인기상품',
    productSubTitle: '오늘의 인기상품을 둘러보세요',
    productPrice: '5,000원',
    productStarRate: '5.0',
    productReviewCount: '총 리뷰(100)',
  },
  {
    id: 3,
    productImage: '/images/main_img.svg',
    productTitle: '인기상품',
    productSubTitle: '오늘의 인기상품을 둘러보세요',
    productPrice: '5,000원',
    productStarRate: '5.0',
    productReviewCount: '총 리뷰(100)',
  },
  {
    id: 4,
    productImage: '/images/main_img.svg',
    productTitle: '인기상품',
    productSubTitle: '오늘의 인기상품을 둘러보세요',
    productPrice: '5,000원',
    productStarRate: '5.0',
    productReviewCount: '총 리뷰(100)',
  },
  {
    id: 1,
    productImage: '/images/main_img.svg',
    productTitle: '인기상품',
    productSubTitle: '오늘의 인기상품을 둘러보세요',
    productPrice: '5,000원',
    productStarRate: '5.0',
    productReviewCount: '총 리뷰(100)',
  },
  {
    id: 1,
    productImage: '/images/main_img.svg',
    productTitle: '인기상품',
    productSubTitle: '오늘의 인기상품을 둘러보세요',
    productPrice: '5,000원',
    productStarRate: '5.0',
    productReviewCount: '총 리뷰(100)',
  },
];

const carouselItems = items.map((mockData, id) => (
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

export default function MainPageUI(props: MainPageUIProps) {
  return (
    <S.ContainerWrapper>
      <S.BannerWrapper>
        <img src='/images/main_img.svg' alt='메인 이미지' />
      </S.BannerWrapper>
      <S.TitleWrapper>
        <S.Title>이번달 인기상품</S.Title>
      </S.TitleWrapper>
      <S.BesProductListWrapper>
        <S.ViewBestProductsListButtonWrapper>
          <S.ViewBestProductsListButton onClick={() => props.goLetterProducts()}>
            전체보기
          </S.ViewBestProductsListButton>
        </S.ViewBestProductsListButtonWrapper>
        <S.BestProductList>
          <AliceCarousel 
          items={carouselItems} 
          responsive={pcResponsive}
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