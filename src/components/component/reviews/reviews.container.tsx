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
            <S.Title> BEST REVIEWS</S.Title>
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
             <S.ReviewContainer>
            <S.Title> 공지사항 </S.Title>
            <S.ReviewList>
            </S.ReviewList>
             </S.ReviewContainer>
        </S.Container>

    );
}