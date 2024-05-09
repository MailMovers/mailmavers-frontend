import { Address, NurserySchools } from '@/type/address';
import {
  AddressData,
  ClearedPointData,
  ConfirmLetterData,
  LetterContent,
  PadData,
  PhotoData,
  TempLetterData,
} from '@/type/letterData';
import axios, { AxiosResponse } from 'axios';

type TResonse = {
  [x: string]: any;
  message: string;
  success?: string;
};

type letterData = {
  letterId?: number;
  writingPadId: number;
  contents: LetterContent[];
};

type TResultConfirmData = {
  success: string;
  message: string;
  data: ConfirmLetterData;
};
type TResultPadData = {
  message: string;
  data: PadData[];
};

export const updateLetterContent = async (editLetterData: letterData) => {
  const res: AxiosResponse<TResonse> = await axios.post(
    `letter/write`,
    editLetterData
  );
  return res.data.message;
};

export const postLetterContent = async (letterData: letterData) => {
  const res: AxiosResponse<TResonse> = await axios.post(
    `letter/write`,
    letterData
  );
  return res.data;
};

export const getPadData = async (url: string): Promise<PadData[]> => {
  const res: AxiosResponse<TResultPadData> = await axios.get(url);
  return res.data.data || [];
};

interface TResultTempLetterData {
  message: string;
  data: TempLetterData[];
}

export const getTempLetterList = async (): Promise<TempLetterData[]> => {
  const res: AxiosResponse<TResultTempLetterData> = await axios.get(
    `letter/check`
  );
  return res.data.data;
};

export const letterAddress = async (addressData: AddressData) => {
  const res: AxiosResponse<TResonse> = await axios.post(
    `letter/stamp`,
    addressData
  );
  return res.data;
};

export const getConfirmLetter = async (url: string) => {
  const res: AxiosResponse = await axios.get(url);
  return res.data.data;
};

export const getAddressNurserySchools = async (
  url: string
): Promise<NurserySchools[]> => {
  const res: AxiosResponse = await axios.get(url);
  return res.data.data;
};

export const getAddressPrisons = async (
  url: string
): Promise<NurserySchools[]> => {
  const res: AxiosResponse = await axios.get(url);
  return res.data.data;
};

export const getAddress = async (url: string): Promise<Address[]> => {
  const res: AxiosResponse = await axios.get(url);
  return res.data.data;
};

export const getPhotoData = async (url: string) => {
  const res: AxiosResponse = await axios.get(url);
  return res.data.data;
};

export const postPhotoData = async (PhotoData: PhotoData) => {
  const res: AxiosResponse<TResonse> = await axios.post(
    `letter/photo`,
    PhotoData
  );
  return res.data;
};

export const getUserId = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

export const postPointCleardData = async (
  ClearedPointData: ClearedPointData
) => {
  const res: AxiosResponse = await axios.post(
    `payments/usePointsForPayment`,
    ClearedPointData
  );
  return res.data;
};
