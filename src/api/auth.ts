import { TUserInfo } from '@/type/auth';
import type { AxiosResponse } from 'axios';
import instance from '@/common/axio-interceptor';
export function kakaoSocailLogin() {
  window.location.href = `${process.env.NEXT_PUBLIC_API_HOST}user/kakao`;
}

export function naverSocailLogin() {
  window.location.href = `${process.env.NEXT_PUBLIC_API_HOST}user/naver`;// 테스트
}

export function postUserLogin(email: string, password: string) {
  return instance.post('/auth/login', { email, password });
}

export function postUserSignup(
  name: string,
  email: string,
  phone: string,
  password: string,
  passwordCheck: string,
  isMarketingAgree: boolean
) {
  return instance.post('/user/signup', {
    name,
    email,
    phone,
    password,
    passwordCheck,
    isMarketingAgree,
  });
}

// TODO : 제거 api
export function postUserEmailAuthentication(email: string) {
  return instance.post('/user/emailauth', { email });
}

// TODO : 제거 api
export function postEmailAuthenticationNumber(
  authNumber: string,
  email: string
) {
  return instance.post('/user/authnumber-check', { authNumber, email });
}

export function postUserEmailCheck(email: string) {
  return instance.post('/user/email-check', { email });
}

export function googleSocailLogin() {
  window.location.href = `${process.env.NEXT_PUBLIC_API_HOST}user/google`;
}

export type TResult = {
  userInfo: TUserInfo;
};

export const getUserInfo = async (): Promise<TUserInfo | null> => {
  try {
    const res: AxiosResponse<TUserInfo> = await instance.get('/mypage/info');
    return res.data
  } catch (error) {

    console.error("getUserInfo error:", error);
    return null;
  }
};