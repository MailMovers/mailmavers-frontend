import { useState } from 'react';
import NoticeListUI from "./notice.presenter";
import { notices, Notice } from "./notice.mocks";

function sortNotices(notices: Notice[]): Notice[] {
    return [...notices].sort((a, b) => {
        if (a.option === 'important' && b.option !== 'important') {
            return -1;
        }
        if (a.option !== 'important' && b.option === 'important') {
            return 1;
        }
        return 0;
    });
}

export default function NoticeListContainer () {
    const [selectedOption, setSelectedOption] = useState<string>('all');

    const filteredNotices: Notice[] = selectedOption === 'all' 
    ? sortNotices(notices) 
    : notices.filter(notice => notice.option === selectedOption);

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <NoticeListUI 
            filteredNotices={filteredNotices} 
            handleSelectOption={handleSelectOption} 
            selectedOption={selectedOption} 
        />
    );
}