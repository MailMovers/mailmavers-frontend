import { useMoveToPage } from "@/hooks/useMoveToPage";
import * as S from "./notice.styles"
import { Notice } from "./notice.mocks";

interface NoticeListUIProps {
    filteredNotices: Notice[];
    handleSelectOption: (option: string) => void;
    selectedOption: string;
}

export default function NoticeListUI ({ filteredNotices, handleSelectOption, selectedOption }: NoticeListUIProps ) {
    const { onClickMoveToPage } = useMoveToPage();

    const handleClick = (option: string) => () => {
        handleSelectOption(option);
    };

    return (
        <S.Wrapper>
            <S.Header>
                <p>공지사항</p>
            </S.Header>
            <S.Selector>
                <button 
                    className={`entire ${selectedOption === 'all' ? 'active' : ''}`} 
                    onClick={handleClick('all')}
                >
                    전체 보기
                </button>
                <button 
                    className={`important ${selectedOption === 'important' ? 'active' : ''}`} 
                    onClick={handleClick('important')}
                >
                    필수 공지
                </button>
                <button 
                    className={`postoffice ${selectedOption === 'postoffice' ? 'active' : ''}`} 
                    onClick={handleClick('postoffice')}
                >
                    우체국 공지
                </button>
                <button 
                    className={`holiday ${selectedOption === 'holiday' ? 'active' : ''}`} 
                    onClick={handleClick('holiday')}
                >
                    휴무 공지
                </button>
            </S.Selector>
            <S.Body>
                <S.NoticeHeader>
                    <p className="option">구분</p>
                    <p className="title">제목</p>
                    <p className="date">작성일</p>
                </S.NoticeHeader>
                <S.NoticeList>
                    {filteredNotices.length > 0 ? (
                        filteredNotices.map((notice) => (
                            <S.NoticeItem 
                                key={notice.id}
                                notice={notice.option}
                                onClick={onClickMoveToPage(`/notice/${notice.id}`)}
                                className="notice-item"
                            >
                                <span className="option">
                                    {notice.option === 'important' ? '[필수 공지]' : `[${notice.option === 'common' ? '일반 공지' : '우체국 공지'}]`}
                                </span>
                                <span className="title">{notice.title}</span>
                                <span className="date">{notice.date}</span>
                            </S.NoticeItem>
                        ))
                    ) : (
                        <S.NoNoticesMessage>
                            등록된 공지사항이 없습니다.
                        </S.NoNoticesMessage>
                    )}
                </S.NoticeList>
            </S.Body>
        </S.Wrapper>
    )
}