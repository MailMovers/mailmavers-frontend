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
  newPhone: string;
};
export const putPhone = async (
  url: string,
  params: { arg: TPhone }
): Promise<TResMsg> => {
  const res: AxiosResponse<TResMsg> = await instance.post(
    `/mypage`,
    params.arg

  );

  return res.data;
};

export const getSendAddrList = async (): Promise<TSendInfo[]> => {
  const res: AxiosResponse<TResultSendAddress> = await instance.get(
    `address/send`
  );



  return res.data.data || [];
};

interface TResultReceiveAddress {
  message: string;
  data: TReceiveInfo[];
}

export const getReceiveAddrList = async (): Promise<TReceiveInfo[]> => {
  const res: AxiosResponse<TResultReceiveAddress> = await instance.get(
    `address/delivery`
  );


  return res.data.data;
};

type TResonse = {
  message: string;
};

type TParamRec = {
  deliveryAddressId: string;
};
export const delReceiveAddr = async (
  url: string,
  param: { arg: TParamRec }
): Promise<string> => {
  const params = { deliveryAddressId: param.arg.deliveryAddressId };
  const res: AxiosResponse<TResonse> = await instance.post(
    `address/delete`,
    params

  );

  return res.data.message;
};

type TParamSend = {
  sendAddressId: string;
};

export const delSendAddr = async (
  url: string,
  param: { arg: TParamSend }
): Promise<string> => {
  const params = { sendAddressId: param.arg.sendAddressId };

  const res: AxiosResponse<TResonse> = await instance.post(
    `address/delete/send`,
    params

  );
  return res.data.message;
};

// export const post

export const postCs = async (
  url: string,
  param: { arg: TCs }
): Promise<TResMsg> => {
  const params = { content: param.arg.content, title: param.arg.title };
  const res: AxiosResponse<TResMsg> = await instance.post('/cs/', params);
  return res.data;
};


export type TCsListResult = {
  csList: TCsInfo[];
  total: string;
};
interface TResultCsInfoList {
  message: string;
  data: TCsListResult;
}

export const getCsList = async (page: string): Promise<TCsListResult> => {
  const res: AxiosResponse<TResultCsInfoList> = await instance.get(`/cs/?page=1`);

  return res.data.data || [];

};

interface TResultCsDetail {
  message: string;
  data: TCsInfoDetail;
}

export const getCsDetail = async (id: number): Promise<TCsInfoDetail> => {
  const res: AxiosResponse<TResultCsDetail> = await instance.get(
    `/cs/detail?customerServiceId=${id}`
  );


  return res.data.data;
};

interface TResultMyReivewList {
  message: string;
  data: TMyReiview;
}

export const getMyReivewList = async (page: number): Promise<TMyReiview> => {
  const res: AxiosResponse<TResultMyReivewList> = await instance.get(
    `/product/myReviews?page=${page} `
  );


  return res.data.data || [];
};

export type TParamDelRv = {
  productId: number;
  reviewId: number;
};

export const delMyReview = async (
  url: string,
  params: { arg: TParamDelRv }
): Promise<string> => {
  const res: AxiosResponse<TResonse> = await instance.post(
    `product/deleteReview`,
    params.arg

  );
  return res.data.message;
};

interface TResultMyLetterHistory {
  message: string;
  data: TMyLetter[];
}

export const getMyLetterHistory = async (): Promise<TMyLetter[]> => {
  const res: AxiosResponse<TResultMyLetterHistory> = await instance.get(
    `letter/history`
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
    `letter/history?letterId=${letterId}`
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
