import * as S from "./notice.styles";

const notices = [
  { title: "우편접수 마감시간 오후 3시로 변경", date: "2023.12.01" },
  { title: "[포인트] 포인트 적립과 사용 방법 안내", date: "2022.05.28" },
  { title: "결제오류 (중복결제 또는 결제만 되고 발송대기함)", date: "2022.04.28" },
  { title: "작성중 삭제된(날라간) 편지내용 복구 방법 안내", date: "2021.11.29" },
  { title: "우체국 접수 마감시간 변경(단축) 안내", date: "2021.09.28" },
];

export default function NoticeListComponent() {
  return (
    <S.Container>
      <S.Header>
        <h2> 공지사항 <span className="required">(필독)</span></h2>
        <a href="#" className="view-all">전체보기</a>
      </S.Header>
      <S.NoticeList>
        {notices.map((notice, index) => (
          <S.NoticeItem key={index} className="notice-item">
            <span className="title">{notice.title}</span>
            <span className="date">{notice.date}</span>
          </S.NoticeItem>
        ))}
      </S.NoticeList>
    </S.Container>
  );
}