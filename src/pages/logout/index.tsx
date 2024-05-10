import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Spin } from 'antd';
import { removeToken } from '@/common/axio-interceptor';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { tokenAtom } from '@/recoil/auth/atom';
import { userInfoAtom } from '@/recoil/mypage/atom';

export default function Logout() {
  const setToken = useSetRecoilState(tokenAtom);
  const resetUserInfo = useResetRecoilState(userInfoAtom);

  const router = useRouter();

  useEffect(() => {
    removeToken().then(() => {
      setToken(null);
      resetUserInfo();
      router.push('/?status=expire');
    });
  }, []);

  return <Spin spinning tip='로그아웃 중' />;
}
