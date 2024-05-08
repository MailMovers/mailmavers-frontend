import { TToken } from '@/type/auth';
import axios, { Axios, AxiosError } from 'axios';
import LocalStorage from './LocalStorage';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;

axios.defaults.withCredentials = true;

const setToken = (accessToken: string, refreshToken: string) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;

  LocalStorage.setItem('accessToken', accessToken);
  LocalStorage.setItem('refreshToken', refreshToken);
};

const removeToken = async () => {
  LocalStorage.removeItem('accessToken');
  LocalStorage.removeItem('refreshToken');
};

const initAxios = (tokenInfo?: TToken) => {
  axios.defaults.headers.common['Authorization'] =
    'Bearer ' + tokenInfo?.accessToken;

  axios.interceptors.request.use(
    (request) => {
      request.headers.Authorization = `Bearer ${tokenInfo?.accessToken}`;
      return request;
    },
    (error) => {
      console.log('error', error);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
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
};

export { setToken, initAxios, removeToken };
