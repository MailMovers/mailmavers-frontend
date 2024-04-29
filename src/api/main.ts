import axios from 'axios';
import type { TNewProduct } from '@/type/main';
import type { AxiosResponse } from 'axios';

interface TResultNewPrd {
  message: string;
  data: TNewProduct[];
}
export const getNewList = async (): Promise<TNewProduct[]> => {
  const res: AxiosResponse<TResultNewPrd> = await axios.get(`/product/new`);

  return res.data.data;
};

export const getPopularList = async (): Promise<TNewProduct[]> => {
  const res: AxiosResponse<TResultNewPrd> = await axios.get(`/product/popular`);

  return res.data.data;
};
