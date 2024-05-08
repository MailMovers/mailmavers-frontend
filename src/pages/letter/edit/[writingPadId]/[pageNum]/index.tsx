import Edit from '@/components/views/letter/Edit';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  const writingPadId = router.query.writingPadId as string;
  const pageNum = router.query.pageNum as string;
  const letterId = router.query.letterId as string;

  return <Edit params={{ writingPadId, pageNum, letterId }} />;
}
