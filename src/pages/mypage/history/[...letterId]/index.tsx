import HistoryDetail from '@/components/mypage/history/HistoryDetail';

interface Params {
  letterId: string[];
}

const Page = ({ params }: { params: Params }) => {
  if (!params || !params.letterId || params.letterId.length === 0) {
    return <div>페이지 에러</div>;
  }
  return <HistoryDetail id={params.letterId[0]} />;
};

export default Page;
