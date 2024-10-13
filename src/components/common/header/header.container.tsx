import { RecoilState } from 'recoil';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useSWR, { mutate } from 'swr';
import { getUserInfo } from '@/api/auth';
import { tokenAtom } from '@/recoil/auth/atom';
import { userInfoAtom } from '@/recoil/mypage/atom';
import LocalStorage from '@/common/LocalStorage';
import { initAxios, removeToken } from '@/common/axio-interceptor';
import HeaderPresenter from './header.presenter';
import type { TUserInfo } from '@/type/auth';

export default function HeaderContainer() {
  const pathname = usePathname();
  const router = useRouter();
  const [token, setToken] = useRecoilState<{ accessToken: string; refreshToken: string } | null>(tokenAtom as RecoilState<{ accessToken: string; refreshToken: string } | null>);
  const [userInfo, setUserInfo] = useRecoilState<TUserInfo | null>(userInfoAtom as RecoilState<TUserInfo | null>);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  useSWR<TUserInfo | null>(
    () => (!!token && !userInfo ? 'getUserInfo' : null),
    getUserInfo,
    {
      fallbackData: null,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onSuccess: (data: TUserInfo | null) => {
        if (data) {
          setUserInfo(data);
        }
      },
    }
  );

  const updateUserInfo = async () => {
    const data = await getUserInfo();
    if (data) {
      setUserInfo(data);
      mutate('getUserInfo', data, false);
    }
  };


  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!token?.accessToken && !token?.refreshToken) {
        const accessToken = LocalStorage.getItem('accessToken');
        const refreshToken = LocalStorage.getItem('refreshToken');

        if (accessToken && refreshToken) {
          setToken({ accessToken, refreshToken });
          initAxios({ accessToken, refreshToken });
        }
      } else {
        updateUserInfo();
      }
    }
  }, [token, setToken]);

  const movePage = (path: string) => {
    setIsOpenMenu(false);
    router.push(path);
  };

  return (
    <HeaderPresenter
      isOpenMenu={isOpenMenu}
      setIsOpenMenu={setIsOpenMenu}
      userInfo={userInfo}
      movePage={movePage}
      token={token?.accessToken ?? null} 
    />
  );
}