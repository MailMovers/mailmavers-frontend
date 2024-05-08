import Select from '@/components/views/letter/Select';
import { useRouter } from 'next/router';

export default function Page({ params }: { params: { writingPadId: string } }) {
  const router = useRouter();

  const writingPadId = router.query.writingPadId as string;
  return <Select params={{ writingPadId: writingPadId }} />;
}
