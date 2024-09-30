import * as S from './editor.styles';
import useTextMaxLength from '../../../../hooks/mail/useTextMaxLength';
import { useEffect, useState, useRef, CSSProperties } from 'react';
import { AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined } from '@ant-design/icons';
import useMoveToPage from '../../../../hooks/mail/useMoveToPage';

interface BoardWriteUIProps {
    pageNum: string | string[] | undefined
}

export default function BoardWriteUI({ pageNum }: BoardWriteUIProps) {
    const [content, setContent] = useState<string[]>(Array(16).fill(''));
    const { inputRefs, handleInputChange, handleKeyPress, handleKeyDown, setInputMaxLength, isMaxLengthModalOpen, setIsMaxLengthModalOpen, moveToNextPageWithFocus, moveToPreviousPageWithFocus, isFirstPageModalOpen, setIsFirstPageModalOpen, isLastPageModalOpen, setIsLastPageModalOpen } = useTextMaxLength(16, setContent);
    const { moveToNextPage, moveToPreviousPage, isMaxPageModalOpen, setIsMaxPageModalOpen } = useMoveToPage();
    const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('small');
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [activeButtons, setActiveButtons] = useState<string[]>([]);
    const [flexButtons, setFlexButtons] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [fontColor, setFontColor] = useState<string>('#000000');

    useEffect(() => {
        setInputMaxLength(fontSize);
    }, [fontSize, setInputMaxLength]);

    useEffect(() => {
        const savedContent = localStorage.getItem(`pageContent-${pageNum}`);
        if (savedContent) {
            setContent(JSON.parse(savedContent));
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

    const handleInputChangeWrapper = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(fontSize)(index)(event);
        const newContent = [...content];
        newContent[index] = event.target.value;
        setContent(newContent);
        localStorage.setItem(`pageContent-${pageNum}`, JSON.stringify(newContent));
    };

    return (
        <>
            <S.ContainerWrapper>
                <S.Header>
                    <S.FontStyleWrapper>
                        <S.FontStyleInput type="text" placeholder="글꼴을 변경하실수있습니다" />
                        <S.PickerWrapper>
                            <span style={{ color: fontColor }}>{fontColor}</span>
                            <S.ColorPicker 
                                type="color" 
                                value={fontColor} 
                                onChange={(e) => setFontColor(e.target.value)}
                            />
                        </S.PickerWrapper>
                    </S.FontStyleWrapper>
                    <S.ButtonWrapper>
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
                    </S.ButtonWrapper>
                </S.Header>
                <S.BlankArea />
                <S.TextAreaWrapper>
                    {Array.from({ length: 16 }).map((_, index) => (
                        <S.Content
                            key={index}
                            id={`${index + 1}line`}
                            ref={(el) => {
                                inputRefs.current[index] = el;
                                if (index === 0) inputRef.current = el; 
                            }}
                            style={{ 
                                fontSize: fontSize === 'large' ? '20px' : fontSize === 'medium' ? '17px' : '12px',
                                ...getTextStyle()
                            }}
                            value={content[index]}
                            onChange={handleInputChangeWrapper(index)}
                            onKeyPress={handleKeyPress(index)}
                            onKeyDown={handleKeyDown(index)}
                        />  
                    ))}
                </S.TextAreaWrapper>
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
            </S.ContainerWrapper>
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
                </S.BottomWrapper>
                <S.PageInfo>{pageNum}/5 page</S.PageInfo>
                <S.BottomWrapper>
                    <S.Button 
                        id='save'
                    >
                        임시저장
                    </S.Button>
                    <S.Button 
                        id='summit'
                    >
                        작성완료
                    </S.Button>
                </S.BottomWrapper>
            </S.FooterWrapper>
        </>
    );
}