export const sortList: Record<string, string> = {
  신상: 'new',
  무지편지지: 'none',
  포토편지지: 'photo',
  전체보기: '',
};

export type Data = {
  id: number;
  name: string;
  description: string;
  img_url_1: string;
};

export type DetailData = {
  id: number;
  name: string;
  description: string;
  description_img_url: string;
  price: number;
  add_price: number;
};

export type WritingPadDetailData = {
  id: number;
  common: string;
  extra: string;
  envelope: string;
  info: string;
  picture: string;
};

export type Reviews = {
  id: number;
  user_id: number;
  content: string;
  created_at: number;
  score: number;
  name: string;
};
