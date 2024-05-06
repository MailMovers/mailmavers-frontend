import Select from '@/components/views/letter/Select';

export default function Page({ params }: { params: { writingPadId: string } }) {
  return <Select params={params} />;
}
