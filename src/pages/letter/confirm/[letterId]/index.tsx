import Confirm from '@/components/views/letter/Confirm';
import { useRouter } from 'next/router';

interface Params {
  letterId: string;
}

export default function Page() {
  const router = useRouter();
  const letterId = router.query.letterId as string;

  return <Confirm params={{ letterId }} />;
}
