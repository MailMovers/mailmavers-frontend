import * as S from './style';
import { useState, useRef, useEffect, CSSProperties } from 'react';
import useTextMaxLength  from '../../../../hooks/mail/useTextMaxLength';
import { AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined } from '@ant-design/icons';
import useMoveToPage from '../../../../hooks/mail/useMoveToPage';
import { postMobileLetterContent } from './axios';
import { useRouter } from 'next/router';

interface MobileBoardEditorProps {
    pageNum: string | string[] | undefined;
    padId: string;
}

export default function MobileBoardEditor({
     padId
}: MobileBoardEditorProps) {
    const router = useRouter();
    const [pageNum, setPageNum] = useState<string | undefined>(undefined);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [content, setContent] = useState<string[]>(Array(16).fill(''));
    const focusAreaRefs = useRef(Array(16).fill(null)); // 16개의 포커스 영역 관리할 Ref
    const { inputRefs,
        isLastPageModalOpen,
        isFirstPageModalOpen,
        isMaxLengthModalOpen,
        handleInputChange,
        handleKeyPress,
        handleKeyDown,
        setIsFirstPageModalOpen,
        setIsMaxLengthModalOpen,
        setInputMaxLength,
        moveToNextPageWithFocus,
        moveToPreviousPageWithFocus,
        setIsLastPageModalOpen } = useTextMaxLength(16, setContent);
    const { moveToNextPage, moveToPreviousPage, isMaxPageModalOpen, setIsMaxPageModalOpen } = useMoveToPage();

    const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [fontColor, setFontColor] = useState<string>('#000000');
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [activeButtons, setActiveButtons] = useState<string[]>([]);
    const [flexButtons, setFlexButtons] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentInputIndex, setCurrentInputIndex] = useState(0);

    useEffect(() => {
        setInputMaxLength(fontSize);
    }, [fontSize, setInputMaxLength]);

    useEffect(() => {
        if (router.isReady) {
            const queryPageNum = router.query.pageNum;
            if (queryPageNum && typeof queryPageNum === 'string') {
                setPageNum(queryPageNum);
            }
        }
    }, [router.isReady, router.query.pageNum]);

    useEffect(() => {
        const observers = focusAreaRefs.current.map((focusAreaRef, index) => {
            return new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && currentInputIndex === index) {
                        // 포커스가 특정 영역에 닿으면 다음 인풋으로 이동
                        if (currentInputIndex < inputRefs.current.length - 1) {
                            setCurrentInputIndex((prevIndex) => prevIndex + 1);
                            const nextInput = inputRefs.current[currentInputIndex + 1];
                            if (nextInput) {
                                nextInput.focus();
                            }
                        } else {
                            // 마지막 인풋에 도달하면 자동 줄바꿈 처리
                            setCurrentInputIndex(0);
                            const nextInput = inputRefs.current[0];
                            if (nextInput) {
                                nextInput.focus();
                            }
                        }
                    }
                });
            }, { threshold: 1.0 });
        });

        focusAreaRefs.current.forEach((focusAreaRef, index) => {
            if (focusAreaRef) {
                observers[index].observe(focusAreaRef);
            }
        });

        return () => {
            focusAreaRefs.current.forEach((focusAreaRef, index) => {
                if (focusAreaRef) {
                    observers[index].unobserve(focusAreaRef);
                    observers[index].disconnect();  // 관찰자 인스턴스를 정리하여 메모리 누수 방지
                }
            });
        };
    }, [currentInputIndex]);

    useEffect(() => {
        if (pageNum) {
            const savedContent = localStorage.getItem(`pageContent-${pageNum}`);
            if (savedContent) {
                setContent(JSON.parse(savedContent));
            }
        }
    }, [pageNum]);

    const handleFontSizeChange = (size: 'small' | 'medium' | 'large') => {
        const hasContent = inputRefs.current.some(input => input && input.value.trim() !== '');
        if (hasContent) {
            setIsModalOpen(true);
            return;
        }
        setFontSize(size);
        setActiveButton(size);
    };
    const handleInputChangeWrapper = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input index:", index);
        console.log("Current input value:", event.target.value);

        handleInputChange(fontSize)(index)(event);

        const newContent = [...content];
        newContent[index] = event.target.value;
        setContent(newContent);
        localStorage.setItem(`pageContent-${pageNum}`, JSON.stringify(newContent));

        // 다음 인풋으로 자동 이동 처리 (최대 너비 기준)
        const inputElement = inputRefs.current[index];
        if (inputElement && inputElement.scrollWidth > inputElement.clientWidth && index < inputRefs.current.length - 1) {
            const nextInput = inputRefs.current[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
        localStorage.setItem(`pageContent-${pageNum}`, JSON.stringify(newContent));

        if (index === 15) {
            const inputElement = inputRefs.current[index];
            if (inputElement && inputElement.scrollWidth > inputElement.clientWidth) {
                setIsMaxLengthModalOpen(true);
                return;
            }
        }
    }

    const handleButtonClick2 = (buttonType: string) => {
        setActiveButtons((prevActiveButtons) =>
            prevActiveButtons.includes(buttonType)
                ? prevActiveButtons.filter((type) => type !== buttonType)
                : [...prevActiveButtons, buttonType]
        );
    };

    const handleFlexButtonClick = (buttonId: string) => {
        setFlexButtons(buttonId);
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
        }
    };

    const handleSubmit = async () => {
        const contents: any = {
            contentCount: content.filter((line) => line.trim() !== '').length,
            fontFamily: "noto sanse",
            padId: padId,
            fontSize: fontSize,
            strong: activeButtons.includes('bold') ? true : false,
            italic: activeButtons.includes('italic') ? true : false,
            underline: activeButtons.includes('underline') ? true : false,
            flex: flexButtons === 'left' ? 'start' : flexButtons === 'center' ? 'center' : flexButtons === 'right' ? 'end' : 'start',
            hexCode: fontColor,
        };

        for (let page = 1; page <= 5; page++) {
            contents[`page${page}`] = {};
            for (let line = 1; line <= 16; line++) {
                const contentIndex = (page - 1) * 16 + (line - 1);
                contents[`page${page}`][`line${line}`] = content[contentIndex] || "";
            }
        }

        const letterData = {
            padId,
            contents
        };

        try {
            await postMobileLetterContent(letterData);
            alert('데이터가 성공적으로 저장되었습니다.');
        } catch (error) {
            console.error('데이터 저장 중 오류가 발생했습니다.', error);
            alert('데이터 저장 중 오류가 발생했습니다.');
        }
    };

    const getTextStyle = (): CSSProperties => {
        let style: CSSProperties = { color: fontColor };
        if (activeButtons.includes('bold')) {
            style.fontWeight = 'bold';
        }
        if (activeButtons.includes('italic')) {
            style.fontStyle = 'italic';
        }
        if (activeButtons.includes('underline')) {
            style.textDecoration = 'underline';
        }
        if (flexButtons === 'left') {
            style.textAlign = 'left';
        }
        if (flexButtons === 'center') {
            style.textAlign = 'center';
        }
        if (flexButtons === 'right') {
            style.textAlign = 'right';
        }
        return style;
    };

    console.log((pageNum) , '페이지번호 ')

    return (
        <S.Container>
            <S.headerWrapper>
                <S.FontStyleInput type="text" placeholder="글꼴을 변경하실수있습니다" />
                <div>
                    <S.ColorWithFlexWrapper>
                        <S.PickerWrapper>
                            <S.ColorPicker
                                type="color"
                                value={fontColor}
                                onChange={(e) => setFontColor(e.target.value)}
                            />
                            <span>{fontColor}</span>
                        </S.PickerWrapper>
                        <S.FlexWrapper>
                            <S.FlexButton
                                id='left'
                                isActive={flexButtons === 'left'}
                                onClick={() => handleFlexButtonClick('left')}
                            >
                                <AlignLeftOutlined />
                            </S.FlexButton>
                            <S.FlexButton
                                id='center'
                                isActive={flexButtons === 'center'}
                                onClick={() => handleFlexButtonClick('center')}
                            >
                                <AlignCenterOutlined />
                            </S.FlexButton>
                            <S.FlexButton
                                id='right'
                                isActive={flexButtons === 'right'}
                                onClick={() => handleFlexButtonClick('right')}
                            >
                                <AlignRightOutlined />
                            </S.FlexButton>
                        </S.FlexWrapper>
                    </S.ColorWithFlexWrapper>
                    <S.HeaderBtnWrapper>
                        <S.FontSizeButtonWrapper>
                            <S.FontSizeButton
                                id='large'
                                isActive={activeButton === 'large'}
                                onClick={() => handleFontSizeChange('large')}
                            >
                                큰글씨
                            </S.FontSizeButton>
                            <S.FontSizeButton
                                id='medium'
                                isActive={activeButton === 'medium'}
                                onClick={() => handleFontSizeChange('medium')}
                            >
                                보통
                            </S.FontSizeButton>
                            <S.FontSizeButton
                                id='small'
                                isActive={activeButton === 'small'}
                                onClick={() => handleFontSizeChange('small')}
                            >
                                작은글씨
                            </S.FontSizeButton>
                        </S.FontSizeButtonWrapper>
                        <S.FormatButtonWrapper>
                            <S.FormatButton
                                isActive={activeButtons.includes('bold')}
                                onClick={() => handleButtonClick2('bold')}
                            >
                                <b style={{ color: activeButtons.includes('bold') ? 'white' : 'black' }}>굵게</b>
                            </S.FormatButton>
                            <S.FormatButton
                                isActive={activeButtons.includes('italic')}
                                onClick={() => handleButtonClick2('italic')}
                            >
                                <i style={{ color: activeButtons.includes('italic') ? 'white' : 'black' }}>기울기</i>
                            </S.FormatButton>
                            <S.FormatButton
                                isActive={activeButtons.includes('underline')}
                                onClick={() => handleButtonClick2('underline')}
                            >
                                <u style={{ color: activeButtons.includes('underline') ? 'white' : 'black' }}>밑줄</u>
                            </S.FormatButton>
                        </S.FormatButtonWrapper>
                    </S.HeaderBtnWrapper>
                </div>
            </S.headerWrapper>
            <S.ImgWrapper>
                <S.BlankArea />
                <S.TextAreaWrapper>
                    {Array.from({ length: 16 }).map((_, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <S.Content
                                id={`${index + 1}line`}
                                ref={(el) => {
                                    inputRefs.current[index] = el;
                                }}
                                value={content[index]}
                                onChange={handleInputChangeWrapper(index)}
                                onKeyPress={handleKeyPress(index)}
                                onKeyDown={handleKeyDown(index)}
                                style={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    fontSize: fontSize === 'large' ? '14px' : fontSize === 'medium' ? '12px' : '8px',
                                    ...getTextStyle()
                                }}
                            />

                        </div>
                    ))}
                </S.TextAreaWrapper>
            </S.ImgWrapper>
            <S.StyledModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    contentLabel="Error Modal"
                >
                    <h2>주의!</h2>
                    <p>작성중에 폰트사이즈 변경을 하실수없습니다.</p>
                    <button onClick={() => setIsModalOpen(false)}>닫기</button>
                </S.StyledModal>
                <S.StyledModal
                    isOpen={isMaxPageModalOpen}
                    onRequestClose={() => setIsMaxPageModalOpen(false)}
                    contentLabel="Max Page Modal"
                >
                    <h2>알림</h2>
                    <p>최대로 이동할 수 있는 페이지는 5번 페이지까지고 편지는 최대 5장입니다.</p>
                    <button onClick={() => setIsMaxPageModalOpen(false)}>확인</button>
                </S.StyledModal>
                <S.StyledModal
                    isOpen={isMaxLengthModalOpen}
                    onRequestClose={() => {
                        setIsMaxLengthModalOpen(false);
                        moveToNextPageWithFocus(pageNum);
                    }}
                    contentLabel="Max Length Modal"
                >
                    <h2>알림</h2>
                    <p>16줄을 초과하였습니다. 다음 페이지로 이동합니다.</p>
                    <button onClick={() => {
                        setIsMaxLengthModalOpen(false);
                        moveToNextPageWithFocus(pageNum);
                    }}>확인</button>
                </S.StyledModal>
                <S.StyledModal
                    isOpen={isFirstPageModalOpen}
                    onRequestClose={() => setIsFirstPageModalOpen(false)}
                    contentLabel="First Page Modal"
                >
                    <h2>알림</h2>
                    <p>현재 페이지는 첫 번째 페이지입니다.</p>
                    <button onClick={() => setIsFirstPageModalOpen(false)}>확인</button>
                </S.StyledModal>
                <S.StyledModal
                    isOpen={isLastPageModalOpen}
                    onRequestClose={() => setIsLastPageModalOpen(false)}
                    contentLabel="Last Page Modal"
                >
                    <h2>알림</h2>
                    <p>현재 페이지는 마지막 페이지입니다.</p>
                    <button onClick={() => setIsLastPageModalOpen(false)}>확인</button>
                </S.StyledModal>
                <S.FooterWrapper>
                <S.BottomWrapper>
                    <S.Button 
                        id='MoveBackPage'
                        onClick={() => moveToPreviousPageWithFocus(pageNum)}
                    >
                        이전
                    </S.Button>
                    <S.Button 
                        id='MoveNextPage'
                        onClick={() => moveToNextPageWithFocus(pageNum)}
                    >
                        다음
                    </S.Button>

                <S.PageInfo>{pageNum ? `${pageNum}/5 page` : ''}</S.PageInfo>
                    <S.Button 
                        id='save'
                        onClick={handleSubmit}
                        >
                        임시저장
                    </S.Button>
                            </S.BottomWrapper>
                        <S.BottomWrapper>
                    <S.Button 
                        id='summit'
                        onClick={handleSubmit}
                    >
                        작성완료
                    </S.Button>
                </S.BottomWrapper>
            </S.FooterWrapper>
        </S.Container>
    );
}