import PhotoSelect from '@/components/views/letter/PhotoSelect';

export default function Page({ params }: { params: { letterId: string } }) {
  if (!params || !params.letterId || params.letterId.length === 0) {
    return <div>페이지 에러</div>;
  }
  return <PhotoSelect params={params} />;
}
