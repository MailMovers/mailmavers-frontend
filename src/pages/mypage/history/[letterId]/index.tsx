import HistoryDetail from '@/components/mypage/history/HistoryDetail';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();


  if (!router.isReady) {
    return <div>Loading...</div>; // 로딩 상태를 보여줌
  }

  const id = router.query.letterId as string;

  // id가 유효한 경우에만 HistoryDetail을 렌더링
  return id ? <HistoryDetail id={id} /> : <div>Invalid ID</div>;
};

export default Page;
