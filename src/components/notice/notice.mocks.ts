export interface Notice {
  id: number;
  option: "postoffice" | "common" | "important" | "holiday";
  title: string;
  content: string;
  date: string;
}

export const notices: Notice[] = [
  { id: 1, option: "postoffice", title: "우편접수 마감시간 오후 3시로 변경", content: "우편접수 마감시간이 기존 오후 5시에서 오후 3시로 변경되었습니다. 이용에 참고하시기 바랍니다.", date: "2023.12.01" },
  { id: 2, option: "common", title: "[포인트] 포인트 적립과 사용 방법 안내", content: "포인트 적립 및 사용 방법에 대한 자세한 안내는 고객센터를 통해 확인하실 수 있습니다.", date: "2022.05.28" },
  { id: 3, option: "important", title: "결제오류 (중복결제 또는 결제만 되고 발송대기함)", content: "일부 사용자에게 결제 오류가 발생하고 있습니다. 불편을 드려 죄송합니다. 문제 해결을 위해 최선을 다하고 있습니다.", date: "2022.04.28" },
  { id: 4, option: "important", title: "작성중 삭제된(날라간) 편지내용 복구 방법 안내", content: "작성 중 삭제된 편지 내용은 복구가 불가능합니다. 중요한 내용은 미리 저장해주시기 바랍니다.", date: "2021.11.29" },
  { id: 5, option: "postoffice", title: "우체국 접수 마감시간 변경(단축) 안내", content: "우체국 접수 마감시간이 단축되었습니다. 자세한 사항은 공지사항을 참조하세요.", date: "2021.09.28" },
];