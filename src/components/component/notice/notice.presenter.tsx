import { useMoveToPage } from "@/hooks/useMoveToPage";
import * as S from "../notice/notice.styles"
import { notices } from "../review-notice/notice/notice.container"

export default function NoticeListUI () {
    const { onClickMoveToPage } = useMoveToPage();

    return (
        <S.Wrapper>
            <S.Header>
                <p>공지사항</p>
            </S.Header>
            <S.Selector>
                <p className="entire">전체 보기</p>
                <p className="essential">필수 공지</p>
                <p className="post">우체국 공지</p>
                <p className="dayoff">휴무 공지</p>
            </S.Selector>
            <S.Body>
            <S.NoticeHeader>
                <p className="option">구분</p>
                <p className="title">제목</p>
                <p className="date">작성일</p>
            </S.NoticeHeader>
            <S.NoticeList>
                {notices.map((notice) => (
                    <S.NoticeItem key={notice.id}
                        notice={notice.option}
                        onClick={onClickMoveToPage(`/notice/${notice.id}`)}
                        className="notice-item">
                            <span className="option">{notice.option === 'important' ? '[공지]' : '[일반]' }</span>
                            <span className="title">{notice.title}</span>
                            <span className="date">{notice.date}</span>
                    </S.NoticeItem>
                ))}
            </S.NoticeList>
            </S.Body>
        </S.Wrapper>
    )
}