import * as S from './style';
import { useState } from 'react';

interface MobileBoardEditorProps {
    pageNum: string | string[] | undefined;
}

export default function MobileBoardEditor({ pageNum }: MobileBoardEditorProps) {
    const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
    const [fontColor, setFontColor] = useState<string>('#000000');
    const [isBold, setIsBold] = useState<boolean>(false);
    const [isItalic, setIsItalic] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const [isUnderLine, setIsUnderLine] = useState<boolean>(false);

    const handleFontSizeChange = (size: 'small' | 'medium' | 'large') => {
        setFontSize(size);
    };

    const handleBoldToggle = () => {
        setIsBold(!isBold);
    };

    const handleItalicToggle = () => {
        setIsItalic(!isItalic);
    };

    const handleUnderLine = () => {
        setIsUnderLine(!isUnderLine);
    };



    return (
        <S.Container>
            <S.headerWrapper>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="나눔손글씨 백의의 천사"
                    style={{
                        fontSize: fontSize === 'large' ? '20px' : fontSize === 'medium' ? '17px' : '12px',
                        color: fontColor,
                        fontWeight: isBold ? 'bold' : 'normal',
                        fontStyle: isItalic ? 'italic' : 'normal',
                        textDecoration: isUnderLine ? 'underline' : 'none' // 수정된 부분
                    }}
                />
                <div>
                <S.PickerWrapper>
                    <S.ColorPicker 
                        type="color" 
                        value={fontColor} 
                        onChange={(e) => setFontColor(e.target.value)} // 색상 선택 시 fontColor 상태 업데이트
                        style={{ cursor: 'pointer', width: '50px', height: '25px', border: 'none', borderRadius: '5px', padding: '0px', marginTop: '5px', marginLeft: '0px' , color: fontColor}} // 색상 선택기 스타일
                    />
                    <span style={{ marginLeft: '10px', fontSize: '14px', width: '100px', border: 'none', marginTop: '8px' }} >
                    {fontColor}
                    </span>
                </S.PickerWrapper>
                <S.HeaderBtnWrapper>
                    <S.FontSizeBtnWrapper>
                    <button onClick={() => handleFontSizeChange('large')}>큰글씨</button>
                    <button onClick={() => handleFontSizeChange('medium')}>보통</button>
                    <button onClick={() => handleFontSizeChange('small')}>작은글씨</button>
                    </S.FontSizeBtnWrapper>

                    <S.FontStyleBtnWrapper> 
                    <button onClick={handleBoldToggle}>{isBold ? 'B' : 'B'}</button>
                    <button onClick={handleItalicToggle}>{isItalic ? 'I' : 'I'}</button>
                    <button onClick={handleUnderLine}>{isUnderLine ? 'U' : 'U'}</button> {/* 버튼 텍스트는 항상 'U'로 유지 */}
                    </S.FontStyleBtnWrapper>
                </S.HeaderBtnWrapper>
                </div>
                <h1>{Array.isArray(pageNum) ? pageNum.join(', ') : pageNum}</h1>
            </S.headerWrapper>
            <S.TextAreaWrapper>
            <S.BlankArea />
                    {Array.from({ length: 17 }).map((_, index) => (
                        <S.Content
                            key={index}
                            id={`${index + 1}line`}
                            // ref={(el) => {
                            //     inputRefs.current[index] = el;
                            //     if (index === 0) inputRef.current = el; 
                            // }}
                            // style={{ 
                            //     fontSize: fontSize === 'large' ? '20px' : fontSize === 'medium' ? '17px' : '12px',
                            //     ...getTextStyle()
                            // }}
                            // value={content[index]}
                            // onChange={handleInputChangeWrapper(index)}
                            // onKeyPress={handleKeyPress(index)}
                            // onKeyDown={handleKeyDown(index)}
                        />  
                    ))}
                </S.TextAreaWrapper>
        </S.Container>
    );
}