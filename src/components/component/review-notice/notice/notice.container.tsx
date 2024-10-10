import { notices } from "@/components/notice/notice.mocks";
import * as S from "./notice.styles";
import { useMoveToPage } from "@/hooks/useMoveToPage";


export default function NoticeListComponent() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Container>
      <S.Header>
        <h2> 공지사항 <span className="required">(필독)</span></h2>
        <a href="#" className="view-all" onClick={onClickMoveToPage("/notice")}>전체보기</a>
      </S.Header>
      <S.NoticeList>
        {notices.map((notice) => (
          <S.NoticeItem key={notice.id} onClick={onClickMoveToPage(`/notice/${notice.id}`)} className="notice-item">
            <span className="title">{notice.title}</span>
            <span className="date">{notice.date}</span>
          </S.NoticeItem>
        ))}
      </S.NoticeList>
    </S.Container>
  );
}