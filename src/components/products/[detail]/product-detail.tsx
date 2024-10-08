import { productData } from './mock';
import * as S from './detail-styles/product-detail.styles'
import {useMoveToPage} from '../../../hooks/useMoveToPage'




const ProductDetail = () => {

  
  const { onClickMoveToPage } = useMoveToPage();
  const {
    id,
    mainImage,
    title,
    badge,
    subtitle,
    price,
    details,
  } = productData;

  return (
    <S.Container>
      <S.DetailWrapper>
        <S.ImageSection>
          <S.MainImage src={mainImage.src} alt={mainImage.alt} />
        </S.ImageSection>
        <S.InfoSection>
          <S.Title>{title} <S.Badge>{badge}</S.Badge></S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
          <S.PriceSection>
            <S.OriginalPrice>{price.original}</S.OriginalPrice>
            <S.DiscountedPrice>{price.discounted}</S.DiscountedPrice>
            <S.DiscountRate>{price.discountRate}</S.DiscountRate>
          </S.PriceSection>
          <S.ProductDetails>
            {details.map((detail, index) => (
              <S.DetailItem key={index}>
                <S.DetailTitle>{detail.title}</S.DetailTitle>
                {detail.content.map((content, idx) => (
                  <S.DetailContent key={idx}>{content}</S.DetailContent>
                ))}
              </S.DetailItem>
            ))}
          </S.ProductDetails>
          <S.ButtonSection>
            <S.Button onClick={onClickMoveToPage(`/mail/${id}/1`)}>편지작성</S.Button>
          </S.ButtonSection>
        </S.InfoSection>
      </S.DetailWrapper>
      <S.Line />
      <S.SectionTitle> D E T A I L</S.SectionTitle>
      <S.DescriptionImgWrapper>
        <S.DescriptionImg src="/images/height.png" />
      </S.DescriptionImgWrapper>
    </S.Container>
  );
};

export default ProductDetail;