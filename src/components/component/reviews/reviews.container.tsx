import * as S from "./reviews.styles"
import { reviews } from "./mocks"
import { useMoveToPage } from "@/hooks/useMoveToPage"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';




export default function BestReviews() {
    const { onClickMoveToPage } = useMoveToPage();


    const carouselItems = reviews.map(review => (
        <S.ReviewCard key={review.id} onClick={onClickMoveToPage("/review")}>
            <S.ImageWrapper>
                <S.Image src={review.image} alt={`Review Image ${review.id}`} />
            </S.ImageWrapper>
            <S.TextWrapper>
                <S.ProductName>{review.productName}</S.ProductName>
                <S.UserInfo>{review.userInfo}</S.UserInfo>
                <S.Description>{review.description}</S.Description>
            </S.TextWrapper>
        </S.ReviewCard>
    ));

    return (
        <S.Container>
            <S.ReviewContainer>
                <S.TitleWrapper>
            <S.Title style={{"color": "orange"}}>메일트리</S.Title>
            <S.SubTitle>회원님들의 이용후기🥰</S.SubTitle>
                </S.TitleWrapper>
            <S.ReviewList>
                <AliceCarousel
                    items={carouselItems}
                    autoPlay
                    autoPlayInterval={9000}
                    infinite
                    disableButtonsControls
                    disableDotsControls
                    />
            </S.ReviewList>
             </S.ReviewContainer>
        </S.Container>

    );
}