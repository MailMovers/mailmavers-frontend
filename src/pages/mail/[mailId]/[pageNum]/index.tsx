import { useEffect, useState } from 'react';
import BoardWrite from '../../../../components/mail/board/write/boardWrite.container';
import MobileBoardEditor from '../../../../components/mail/board/mobile-board/editor';

interface MailPageProps {
    pageNum: string; // pageNum의 타입을 명시
}

interface MailPageProps {
    pageNum: string; // pageNum의 타입을 명시
}

const MailPage: React.FC<MailPageProps> = ({ pageNum }) => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        handleResize(); // 초기 사이즈 체크
        window.addEventListener('resize', handleResize); // 리사이즈 이벤트 리스너 추가

        return () => {
            window.removeEventListener('resize', handleResize); // 클린업
        };
    }, []);

    return (
        <>
            {isMobile ? <MobileBoardEditor pageNum={pageNum} /> : <BoardWrite pageNum={pageNum} />}
        </>
    );
};

export default MailPage;