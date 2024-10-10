import axios, { AxiosResponse } from 'axios';
import { LetterContent } from './types';

type TResonse = {
  [x: string]: any;
  message: string;
  success?: string;
};

type LetterData = {
  contents: LetterContent[];
};

export const postMobileLetterContent = async (letterData: LetterData, accessToken: string) => {
  try {
    const response: AxiosResponse = await axios.post(
      `letters/`,
      letterData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 유저의 액세스 토큰을 헤더에 추가
        },
      }
    );
    return response;
  } catch (error) {
    console.error('API 요청 중 오류가 발생했습니다.', error);
    throw error; // 오류 발생 시 상위로 전달
  }
};
