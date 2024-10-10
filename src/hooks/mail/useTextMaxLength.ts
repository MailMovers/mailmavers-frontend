import { useRef, useState } from 'react';
import useMoveToPage from './useMoveToPage';

const useTextMaxLength = (inputCount: number, setContent: (content: string[]) => void) => {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const { moveToNextPage, moveToPreviousPage } = useMoveToPage();
    const [isMaxLengthModalOpen, setIsMaxLengthModalOpen] = useState(false);
    const [isFirstPageModalOpen, setIsFirstPageModalOpen] = useState(false);
    const [isLastPageModalOpen, setIsLastPageModalOpen] = useState(false);

    const isKorean = (value: string) => {
        return /[\uac00-\ud7af\u1100-\u11ff\u3130-\u318f\uA960-\uA97F\uD7B0-\uD7FF]/.test(value);
    };

    const getMaxLength = (fontSize: 'large' | 'medium' | 'small', value: string) => {
        const koreanMaxLengths = { large: 100, medium: 100, small: 100 };
        const englishMaxLengths = { large: 100, medium: 100, small: 100 };
        return isKorean(value) ? koreanMaxLengths[fontSize] : englishMaxLengths[fontSize];
    };

    const handleInputChange = (fontSize: 'large' | 'medium' | 'small') => (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const maxLength = getMaxLength(fontSize, value);
        if (value.length >= maxLength) {
            const nextInput = inputRefs.current[index + 1];
            if (nextInput) {
                nextInput.focus();
            } else if (index === inputCount - 1) {
                setIsMaxLengthModalOpen(true);
            }
        }
    };

    const handleKeyPress = (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const nextInput = inputRefs.current[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace' && event.currentTarget.value === '') {
            const prevInput = inputRefs.current[index - 1];
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    const setInputMaxLength = (fontSize: 'large' | 'medium' | 'small') => {
        inputRefs.current.forEach((input) => {
            if (input) {
                const maxLength = getMaxLength(fontSize, input.value);
                input.maxLength = maxLength;
            }
        });
    };

    const moveToNextPageWithFocus = (pageNum: string | string[] | undefined) => {
        if (pageNum === '5') {
            setIsLastPageModalOpen(true);
            return;
        }
        moveToNextPage();
        setTimeout(() => {
            if (inputRefs.current[0]) {
                inputRefs.current[0].focus();
            }
            const nextPageNum = (parseInt(pageNum as string) + 1).toString();
            const savedContent = localStorage.getItem(`pageContent-${nextPageNum}`);
            if (savedContent) {
                setContent(JSON.parse(savedContent));
            }
        }, 0);
    };
    
    const moveToPreviousPageWithFocus = (pageNum: string | string[] | undefined) => {
        if (pageNum === '1') {
            setIsFirstPageModalOpen(true);
            return;
        }
        moveToPreviousPage();
        setTimeout(() => {
            if (inputRefs.current[0]) {
                inputRefs.current[0].focus();
            }
            const prevPageNum = (parseInt(pageNum as string) - 1).toString();
            const savedContent = localStorage.getItem(`pageContent-${prevPageNum}`);
            if (savedContent) {
                setContent(JSON.parse(savedContent));
            }
        }, 0);
    };

    return {
        inputRefs,
        isMaxLengthModalOpen,
        isFirstPageModalOpen,
        isLastPageModalOpen,
        handleKeyPress,
        handleKeyDown,
        handleInputChange,
        handleInputLargeFontChange: handleInputChange('large'),
        handleInputMediumFontChange: handleInputChange('medium'),
        handleInputSmallFontChange: handleInputChange('small'),
        moveToPreviousPageWithFocus,
        moveToNextPageWithFocus,
        setInputMaxLength,
        setIsMaxLengthModalOpen,
        setIsFirstPageModalOpen,
        setIsLastPageModalOpen,
    };
};

export default useTextMaxLength;