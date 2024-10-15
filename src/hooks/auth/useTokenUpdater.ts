import { useSetRecoilState } from 'recoil';
import { tokenAtom } from '@/recoil/auth/atom';

export function useTokenUpdater() {
  const setRecoilToken = useSetRecoilState(tokenAtom);

  return (accessToken: string | null, refreshToken: string | null) => {
    setRecoilToken({ accessToken, refreshToken });
  };
}