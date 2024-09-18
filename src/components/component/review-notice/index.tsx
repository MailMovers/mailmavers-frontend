import BestReviews from "./reviews/reviews.container"
import NoticeListComponent from "./notice/notice.container"
import * as S from "./styles"

export default function ReviewAndNoticeComponent() {
    return (
        <S.Container>
        <BestReviews/>
        <NoticeListComponent/>
        </S.Container>
    )
}