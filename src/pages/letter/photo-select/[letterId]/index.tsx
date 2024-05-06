import PhotoSelect from '@/components/views/letter/PhotoSelect';

export default function Page({ params }: { params: { letterId: string } }) {
  return <PhotoSelect params={params} />;
}
