import HistoryDetail from '@/components/mypage/history/HistoryDetail';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  const id = router.query.letterId as string;

  return <HistoryDetail id={id} />;
};

export default Page;
