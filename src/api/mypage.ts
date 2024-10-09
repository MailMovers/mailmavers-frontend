import instance from '@/common/axio-interceptor';
import type { TSendInfo, TReceiveInfo } from '@/type/address';
import type { TResMsg } from '@/type/common';
import type { AxiosResponse } from 'axios';
import {
  TCs,
  TCsInfo,
  TCsInfoDetail,
  TLetterInform,
  TMyLetter,
  TMyReiview,
  TMypagePayment,
  TRecipe,
  TReviewPost,
} from '@/type/mypage';

interface TResultSendAddress {
  message: string;
  data: TSendInfo[];
}

export type TPwd = {
  password: string;
};
export const putPassword = async (
  url: string,
  params: { arg: TPwd }
): Promise<TResMsg> => {
  const res: AxiosResponse<TResMsg> = await instance.post(
    `mypage/change-password`,
    params.arg

  );

  return res.data;
};

export type TPhone = {
    phone: string;
};

export const putPhone = async (phone: TPhone): Promise<TResMsg> => {
  const response: AxiosResponse<TResMsg> = await instance.post(`mypage/change-phone`,
    phone
  )
  return response.data;
}

interface TResultAddrList {
  sendAddresses: TSendInfo[];
  deliveryAddresses: TReceiveInfo[];
}

export const getAddrList = async (): Promise<TResultAddrList> => {
  const res: AxiosResponse<TResultAddrList> = await instance.get(
    `mypage/address`
  );
  return res.data;
};

export const getSendAddrList = async (): Promise<TSendInfo[]> => {
  const res: AxiosResponse<TResultSendAddress> = await instance.get(
    `mypage/address`
  );

  return res.data.data;
};


interface TResultReceiveAddress {
  message: string;
  data: TReceiveInfo[];
}

export const getReceiveAddrList = async (): Promise<TReceiveInfo[]> => {
  const res: AxiosResponse<TResultReceiveAddress> = await instance.get(
    `mypage/address`
  );


  return res.data.data;
};

type TResonse = {
  message: string;
};

type TParamRec = {
  deliveryAddressId: number;
};


export const delReceiveAddr = async (
  param: TParamRec
): Promise<string> => {
  const res: AxiosResponse<TResonse> = await instance.delete(
    `mypage/delivery-address/${param.deliveryAddressId}`
  );

  return res.data.message;
};

type TParamSend = {
  sendAddressId: number;
};

export const delSendAddr = async (
  param: TParamSend
): Promise<string> => {
  const res: AxiosResponse<TResonse> = await instance.delete(
    `mypage/send-address/${param.sendAddressId}`
  );
  return res.data.message;
};  

export const postCs = async (
  url: string,
  param: { arg: TCs }
): Promise<TResMsg> => {
  const params = { content: param.arg.content, title: param.arg.title };
  const res: AxiosResponse<TResMsg> = await instance.post('/mypage/cs-inquiries', params);
  return res.data;
};


export type TCsListResult = TCsInfo[];

interface TResultCsInfoList {
  message: string;
  data: TCsListResult;
}

export const getCsList = async (): Promise<TCsListResult> => {
  const res: AxiosResponse<TCsInfo[]> = await instance.get(`/mypage/cs-inquiries/`);
  return res.data;
};

interface TResultCsDetail {
  message: string;
  data: TCsInfoDetail;
}

export const getCsDetail = async (id: number): Promise<TCsInfoDetail> => {
  const res: AxiosResponse<TCsInfoDetail> = await instance.get(
    `/mypage/cs-inquiries/${id}`
  );

  return res.data;
};

interface TResultMyReivewList {
  message: string;
  data: TMyReiview;
}

export const getMyReivewList = async (): Promise<TMyReiview> => {
  const res: AxiosResponse<TResultMyReivewList> = await instance.get(
    `/mypage/reviews`
  );

  return res.data.data || [];
};

export type TParamDelRv = {
  productId: number;
  reviewId: number;
};

export const delMyReview = async (reviewId: number): Promise<string> => {
  const res: AxiosResponse<TResonse> = await instance.delete(
    `mypage/reviews/${reviewId}`,
  );
  return res.data.message;
};

interface TResultMyLetterHistory {
  message: string;
  data: TMyLetter[];
}

export const getMyLetterHistory = async (): Promise<TMyLetter[]> => {
  const res: AxiosResponse<TResultMyLetterHistory> = await instance.get(
    `/mypage/letters`
  );

  return res.data.data || [];
};

export type TPhoto = {
  img_url: string;
};

export type THistoryDetail = {
  letterInformation: TLetterInform[];
  recipe: TRecipe[];
  photo: TPhoto[];
};

interface TResultMyLetterHistoryDetail {
  message: string;
  data: THistoryDetail;
}
export const getMyLetterHistoryDetail = async (
  letterId: string
): Promise<THistoryDetail> => {
  const res: AxiosResponse<TResultMyLetterHistoryDetail> = await instance.get(
    `mypage/history/${letterId}`
  );

  return res.data.data;
};

export const getMyPayments = async (): Promise<TMypagePayment> => {
  const res: AxiosResponse<TMypagePayment> = await instance.get(
    `payments/pointTransactions`
  );

  return res.data;
};

interface TResultPostReivew {
  message: string;
  data: TReviewPost;
}

export type TPostReviewParam = {
  productId: number;
  letterId: number;
  score: number;
  content: string;
};
export const postReview = async (
  url: string,
  param: { arg: TPostReviewParam }
): Promise<TReviewPost> => {
  const res: AxiosResponse<TResultPostReivew> = await instance.post(
    `/product/${param.arg.productId}`,
    {
      score: param.arg.score,
      content: param.arg.content,
      letterId: param.arg.letterId,
    }
  );
  return res.data.data;
};
