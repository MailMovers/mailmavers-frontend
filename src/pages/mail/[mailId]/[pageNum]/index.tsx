import BoardWrite from '@/components/mail/board/write/boardWrite.container';
import { useRouter } from 'next/router';

export default function WritePage() {
    const router = useRouter();
    const { pageNum } = router.query;

    return <BoardWrite pageNum={pageNum} />;
}
