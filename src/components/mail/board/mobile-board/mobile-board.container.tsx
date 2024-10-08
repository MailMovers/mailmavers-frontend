import MobileBoardEditor from './editor';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function BoardWrite() {
    const router = useRouter();
    const [pageNum, setPageNum] = useState<string | undefined>();

    // 라우터에서 pageNum 쿼리 값을 가져와서 상태로 관리합니다.
    useEffect(() => {
        if (router.isReady) {
            const queryPageNum = router.query.pageNum;
            if (queryPageNum && typeof queryPageNum === 'string') {
                setPageNum(queryPageNum);
            }
        }
    }, [router.isReady, router.query.pageNum]);

    if (!pageNum) {
        return <div>Loading...</div>; // 아직 pageNum이 설정되지 않은 경우 로딩 표시
    }

    return (
        <>
            <MobileBoardEditor pageNum={pageNum} padId="1" />
        </>
    );
}
