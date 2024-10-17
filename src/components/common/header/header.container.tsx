import { RecoilState, useRecoilValue } from 'recoil';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useSWR, { mutate } from 'swr';
import { getUserInfo } from '@/api/auth';
import { tokenAtom } from '@/recoil/auth/atom';
import { userInfoAtom } from '@/recoil/mypage/atom';
import LocalStorage from '@/common/LocalStorage';
import instance, { initAxios, removeToken, setToken } from '@/common/axio-interceptor';
import HeaderPresenter from './header.presenter';
import type { TUserInfo } from '@/type/auth';
import { useTokenUpdater } from '@/hooks/auth/useTokenUpdater';
import axios from 'axios';

export default function HeaderContainer() {
  const pathname = usePathname();
  const router = useRouter();
  const token = useRecoilValue(tokenAtom);
  const [userInfo, setUserInfo] = useRecoilState<TUserInfo | null>(userInfoAtom as RecoilState<TUserInfo | null>);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const updateToken = useTokenUpdater();

  useEffect(() => {
    const refreshToken = LocalStorage.getItem('refreshToken');
  
    if (refreshToken && !(token?.accessToken)) {
      axios.post(`${process.env.NEXT_PUBLIC_API_HOST}auth/refresh`, { refresh_token: refreshToken })
        .then(response => {
          const { access_token, refresh_token } = response.data;
          if (access_token && refresh_token) {
            setToken(access_token, refresh_token);
            updateToken(access_token, refresh_token);
            updateUserInfo();
          } else {
            throw new Error('Invalid token response');
          }
        })
        .catch(error => {
          console.error('Failed to refresh access token on load:', error);
          removeToken();
          setUserInfo(null); // 리코일에 저장된 사용자 정보 초기화
          setToken(null, null); // 리코일에 저장된 토큰 초기화
        });
    }
  }, [token, updateToken]);

  // useSWR<TUserInfo | null>(
  //   () => (!!token && !userInfo ? 'getUserInfo' : null),
  //   getUserInfo,
  //   {
  //     fallbackData: null,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //     onSuccess: (data: TUserInfo | null) => {
  //       if (data) {
  //         setUserInfo(data);
  //       }
  //     },
  //   }
  // );

  const updateUserInfo = async () => {
    const data = await getUserInfo();
    if (data) {
      setUserInfo(data);
      mutate('getUserInfo', data, false);
    }
  };

  const handleTokenUpdate = (accessToken: string | null, refreshToken: string | null) => {
    if (accessToken && refreshToken) {
      updateToken(accessToken, refreshToken);
    }  };

  useEffect(() => {
    if (token?.accessToken) {
      initAxios(token);
      updateUserInfo();
    }
  }, [token?.accessToken]);

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