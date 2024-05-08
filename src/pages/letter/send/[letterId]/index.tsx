import Send from '@/components/views/letter/Send';

export default function Page({ params }: { params: { letterId: string } }) {
  if (!params || !params.letterId || params.letterId.length === 0) {
    return <div>페이지 에러</div>;
  }
  return <Send params={params} />;
}
