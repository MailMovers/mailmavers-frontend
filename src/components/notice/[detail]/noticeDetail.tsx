import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { notices } from "../notice.mocks";
import * as S from "../../notice/[detail]/noticeDetail.style"
import { useMoveToPage } from "@/hooks/useMoveToPage";
import { RollbackOutlined } from '@ant-design/icons';


type Notice = {
    id: number;
    option: string;
    title: string;
    content: string;
    date: string;
};

export default function NoticeDetail() {
    const router = useRouter();
    const { noticeId } = router.query;
    const [notice, setNotice] = useState<Notice | undefined>(undefined);
    const { onClickMoveToPage } = useMoveToPage();

    useEffect(() => {
        if (noticeId) {
            const id = Number(noticeId); // noticeId를 숫자로 변환
            const foundNotice = notices.find((n) => n.id === id); // notices 배열에서 id에 해당하는 공지 찾기
            setNotice(foundNotice); // 찾은 공지를 setNotice로 설정
        }
    }, [noticeId]);

    return (
        <S.Wrapper>
            <S.Header>
                <p>공지사항</p>
                <div onClick={onClickMoveToPage('/notice')}><RollbackOutlined /></div>
            </S.Header>
            <S.Body>
                <S.Title notice={notice?.option}>
                    <span className="option">{notice?.option === 'important' ? '[필수 공지]' : '[일반]' }</span>
                    <p>{notice?.title}</p>
                    <div className="date">
                        <span>관리자</span>
                        <p>작성일: {notice?.date}</p>
                    </div>
                </S.Title>
                <S.content>
                    <p>{notice?.content}</p>
                </S.content>
            </S.Body>
            <S.Footer>
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
                            <span className="option">{notice.option === 'important' ? '[필수 공지]' : '[일반]' }</span>
                            <span className="title">{notice.title}</span>
                            <span className="date">{notice.date}</span>
                    </S.NoticeItem>
                ))}
            </S.NoticeList>
            </S.Footer>
        </S.Wrapper>
    );
}