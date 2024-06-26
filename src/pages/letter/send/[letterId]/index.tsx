import Send from '@/components/views/letter/Send';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const letterId = router.query.letterId as string;
  return <Send params={{ letterId }} />;
}
