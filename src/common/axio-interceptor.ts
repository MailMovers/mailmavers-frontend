import type { TToken } from '@/type/auth';
import axios, { AxiosError } from 'axios';
import LocalStorage from './LocalStorage';


const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  withCredentials: true,
});

export const setToken = (accessToken: string, refreshToken: string) => {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
  LocalStorage.setItem('accessToken', accessToken);
  LocalStorage.setItem('refreshToken', refreshToken);
};

export const removeToken = async () => {
  LocalStorage.removeItem('accessToken');
  LocalStorage.removeItem('refreshToken');
  instance.defaults.headers.common['Authorization'] = 'Bearer ';
};

export const initAxios = (tokenInfo?: TToken) => {
  if (tokenInfo?.accessToken) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + tokenInfo.accessToken;
  }
};

instance.interceptors.request.use(
  (config) => {
    const accessToken = LocalStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log('request error > ', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(

  (response) => {
    return response;
  },
  (error) => {
    const err = error as AxiosError;

    if (err.response?.data) {
      // if (error.response.data.error.name === 'TokenExpiredError') {
      //   window.location.href = '/?status=expire';
      // }
      //   const { data } = err.response as TError;
      //   if (data.message === 'jwt malformed') {
      //     removeToken();
      //     window.location.href = '/?status=expire';
      //   }
      // }
    }

    return Promise.reject(error);
    // return new Promise((resolve, reject) => {
    //   // AccessToken 만료 시 어럿창 -> 메인페이지로 이동
    //   // if (error.response.data.code === 'AUTHENTICATION_TOKEN_USER_NONE') {
    //   //   return reject(error);
    //   // }

    //   // AccessToken 만료 시 TokenRefresh 후 재 요청 처리
    //   if (
    //     error.config &&
    //     error.response &&
    //     error.response.data.error &&
    //     error.response.data.error.name &&
    //     error.response.data.error.name === 'TokenExpiredError'
    //   ) {
    //     const refreshToken = tokenInfo?.refreshToken;
    //     fetch(`${process.env.NEXT_PUBLIC_API_HOST}user/refresh`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${tokenInfo?.accessToken}`,
    //       },
    //       body: JSON.stringify({ refreshToken: refreshToken }),
    //     }).then((res) => {
    //       console.log('Res', res);
    //     });
    //   }

    //   return reject(error);
    // });
  }
);

export default instance;