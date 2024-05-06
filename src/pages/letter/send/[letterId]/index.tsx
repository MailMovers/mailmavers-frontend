import Send from '@/components/views/letter/Send';

export default function Page({ params }: { params: { letterId: string } }) {
  return <Send params={params} />;
}
