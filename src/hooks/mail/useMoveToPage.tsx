import { useState } from 'react';
import { useRouter } from 'next/router';

const useMoveToPage = (initialPageNum = 1) => {
    const router = useRouter();
    const [pageNum, setPageNum] = useState(initialPageNum);
    const [isPageMoving, setIsPageMoving] = useState(false);
    const [isMaxPageModalOpen, setIsMaxPageModalOpen] = useState(false);
    const { mailId } = router.query;
    const MAX_PAGE = 5;

    const moveToNextPage = () => {
        if (isPageMoving) return;

        if (Number(pageNum) >= MAX_PAGE) {
            setIsMaxPageModalOpen(true);
            return;
        }

        setIsPageMoving(true);
        const nextPageNum = Number(pageNum) + 1;
        router.push(`/mail/${mailId}/${nextPageNum}`).then(() => {
            setPageNum(nextPageNum);
            setIsPageMoving(false);
        });
    };

    const moveToPreviousPage = () => {
        if (isPageMoving || Number(pageNum) === 1) return;

        setIsPageMoving(true);
        const prevPageNum = Number(pageNum) - 1;
        router.push(`/mail/${mailId}/${prevPageNum}`).then(() => {
            setPageNum(prevPageNum);
            setIsPageMoving(false);
        });
    };

    return { pageNum, moveToNextPage, moveToPreviousPage, isMaxPageModalOpen, setIsMaxPageModalOpen };
};

export default useMoveToPage;