import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Spin } from 'antd';
import { removeToken } from '@/common/axio-interceptor';
import { useResetRecoilState } from 'recoil';
import { tokenAtom } from '@/recoil/auth/atom';

export default function Logout() {
  const resetToken = useResetRecoilState(tokenAtom);

  const router = useRouter();

  useEffect(() => {
    removeToken().then(() => {
      resetToken();
      router.push('/');
    });
  }, []);

  return <Spin spinning tip='로그아웃 중' />;
}
