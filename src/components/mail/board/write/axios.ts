import { AxiosResponse } from "axios";
import { LetterContent } from "./types";
import instance from "@/common/axio-interceptor";

type TResonse = {
  [x: string]: any;
  message: string;
  success?: string;
};

type letterData = {
  contents: LetterContent[];
};

export const postLetterContent = async (letterData: letterData) => {
  try {
    const response: AxiosResponse = await instance.post(`letters/`, letterData);
    return response;
  } catch (error) {
    console.error("API 요청 중 오류가 발생했습니다.", error);
    throw error;
  }
};
