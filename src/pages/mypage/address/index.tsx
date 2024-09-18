import MyPageLayout from '@/components/mypage/MyPageLayout';
import Address from '@/components/views/mypage/Address/Address';

export default function Page() {
  return (
    <>
      <MyPageLayout>
        <Address />
      </MyPageLayout>
    </>
  );
}
