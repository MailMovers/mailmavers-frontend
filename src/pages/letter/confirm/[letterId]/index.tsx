import Confirm from '@/components/views/letter/Confirm';

interface Params {
  letterId: string;
}

export default function Page({ params }: { params: Params }) {
  return <Confirm params={params} />;
}
