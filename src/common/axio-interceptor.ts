import type { TToken } from '@/type/auth';
import axios, { AxiosError } from 'axios';
import LocalStorage from './LocalStorage';

let accessToken: string | null = null;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  withCredentials: true,
});

export const setToken = (newAccessToken: string, refreshToken: string) => {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
  LocalStorage.setItem('refreshToken', refreshToken);
  accessToken = newAccessToken;

};

export const removeToken = async () => {
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
  // (response) => response,
  // async (error) => {
  //   const originalRequest = error.config;
  //   if (error.response?.status === 401 && !originalRequest._retry) {
  //     originalRequest._retry = true;
  //     const refreshToken = LocalStorage.getItem('refreshToken');
  //     if (refreshToken) {
  //       try {
  //         const response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}auth/refresh`, { refresh_token: refreshToken });
  //         console.log("response", response.data); // 응답 데이터 확인
  //         const { access_token, refresh_token } = response.data; // 백엔드와 일치하는 키 이름 사용
  //         if (access_token && refresh_token) {
  //           console.log('Token refreshed successfully');
  //           setToken(access_token, refresh_token);
  //           originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
  //           return instance(originalRequest);
  //         } else {
  //           console.error('Invalid token response');
  //           throw new Error('Invalid token response');
  //         }
  //       } catch (refreshError) {
  //         console.error('Failed to refresh access token:', refreshError);
  //         removeToken();
  //         window.location.href = '/';
  //         return Promise.reject(refreshError);
  //       }
  //     } else {
  //       console.error('No refresh token available');
  //     }
  //   }
  //   return Promise.reject(error);
  // }
);

export default instance;