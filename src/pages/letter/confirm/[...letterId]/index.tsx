import Confirm from '@/components/views/letter/Confirm';

interface Params {
  letterId: string;
}

export default function Page({ params }: { params: Params }) {
  if (!params || !params.letterId || params.letterId.length === 0) {
    return <div>페이지 에러</div>;
  }

  return <Confirm params={params} />;
}
