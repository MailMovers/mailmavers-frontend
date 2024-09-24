import { useRef, useEffect } from 'react';

const useTextMaxLength = (inputCount: number) => {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const isKorean = (value: string) => {
        return /[\uac00-\ud7af\u1100-\u11ff\u3130-\u318f\uA960-\uA97F\uD7B0-\uD7FF]/.test(value);
    };

    const getMaxLength = (fontSize: 'large' | 'medium' | 'small', value: string) => {
        const koreanMaxLengths = { large: 37, medium: 44, small: 62 };
        const englishMaxLengths = { large: 69, medium: 79, small: 123 };
        return isKorean(value) ? koreanMaxLengths[fontSize] : englishMaxLengths[fontSize];
    };

    const handleInputChange = (fontSize: 'large' | 'medium' | 'small') => (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const maxLength = getMaxLength(fontSize, value);
        if (value.length >= maxLength) {
            const nextInput = inputRefs.current[index + 1];
            if (nextInput) {
                nextInput.focus();
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

    return {
        inputRefs,
        handleKeyPress,
        handleKeyDown,
        handleInputLargeFontChange: handleInputChange('large'),
        handleInputMediumFontChange: handleInputChange('medium'),
        handleInputSmallFontChange: handleInputChange('small'),
        setInputMaxLength,
    };
};

export default useTextMaxLength;