import { useEffect, useState } from 'react';
import MobileBoardEditor from '../../../../components/mail/board/mobile-board/editor';
import BoardWrite from '../../../../components/mail/board/write/boardWrite.container';

interface MailPageProps {
    pageNum: string;
    padId: string;
}

const Mail: React.FC<MailPageProps> = ({ pageNum, padId }) => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        handleResize(); // 초기 사이즈 체크
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // 클린업
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <MobileBoardEditor pageNum={pageNum} padId={padId} />
            ) : (
                <BoardWrite pageNum={pageNum} padId={padId} />
            )}
        </>
    );
};

export default Mail;
