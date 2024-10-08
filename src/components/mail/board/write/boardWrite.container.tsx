import BoardWriteUI from './editor';
import { useRouter } from 'next/router';

interface BoardWriteProps {
    pageNum: string | string[] | undefined;
    padId: string;
}

export default function BoardWrite({ pageNum, padId }: BoardWriteProps) {
    const router = useRouter();
    const { pageNum: queryPageNum } = router.query;

    return (
        <>
            <BoardWriteUI pageNum={pageNum || queryPageNum} padId={padId} />
        </>
    );
}
