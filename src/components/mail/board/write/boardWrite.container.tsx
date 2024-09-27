import BoardWriteUI from './editor';
import { useRouter } from 'next/router';

interface BoardWriteProps {
    pageNum: string | string[] | undefined;
}

export default function BoardWrite({ pageNum }: BoardWriteProps) {
    const router = useRouter();
    const { pageNum: queryPageNum } = router.query;

    return (
        <>
            <BoardWriteUI pageNum={pageNum || queryPageNum} />
        </>
    );
}