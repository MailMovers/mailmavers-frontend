import Edit from '@/components/views/letter/Edit';

interface Params {
  writingPadId: string;
  pageNum: string[];
  letterId: string[];
}

export default function Page({ params }: { params: Params }) {
  return <Edit params={params} />;
}
