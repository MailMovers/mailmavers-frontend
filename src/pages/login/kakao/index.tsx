import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { tokenAtom } from '@/recoil/auth/atom';

export default function KakaoLoginpage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const setToken = useSetRecoilState(tokenAtom);
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      return;
    }

    localStorage.setItem('accessToken', accessToken || '');
    localStorage.setItem('refreshToken', refreshToken || '');
    setToken({ accessToken, refreshToken });
    router.push('/');
  }, [accessToken, refreshToken, router]);

  return <div>Loading...</div>;
}
