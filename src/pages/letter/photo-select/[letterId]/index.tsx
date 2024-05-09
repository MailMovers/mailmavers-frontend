import PhotoSelect from '@/components/views/letter/PhotoSelect';
import { useRouter } from 'next/router';

export default function Page({ params }: { params: { letterId: string } }) {
  const router = useRouter();

  const letterId = router.query.letterId as string;
  return <PhotoSelect params={{ letterId }} />;
}
