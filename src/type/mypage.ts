export type TCs = {
  title: string;
  category: string;
  content: string;
};

export type TCsInfo = {
  id: number; // 37;
  title: string;
  category: string; //  문의 카테고리
  createdAt: string; // '2023-12-07T09:23:47.000Z';
  status: string; //  답변 상태
};


export type TCsInfoDetail = {
  id: number; // 1;
  title: string; //  제목입니다;
  category: string;
  content: string; //  '내용입니다';
  user_id: number; // 1;
  created_at: string; // '2023-12-11T11:24:00.000Z';
  csa_id: number; // 1;
  csa_content: string; // '내용입니다';
  csa_user_id: number; // 1;
  csa_created_at: string; // '2023-12-11T11:33:14.000Z';
};

export type TReview = {
  name: string;
  imgUrl1: string;
  reviewId: number;
  content: string;
  userId: number;
  score: number;
  reviewCreatedAt: string;
  reviewDeletedAt: string | null;
};

export type TMyReiview = {
  count: string;
  data: TReview[];
};

export type TMyLetter = {
  letterId: number,
  status: string,
  registrationNumber: string,
  name: string,
  writingPadId: number,
  deliveryAddress: string,
  deliveryAddress_detail: string,
  deliveryPhone: string,
  deliveryName: string,
  sendAddress: string,
  sendAddress_detail: string,
  sendPhone: string,
  sendName: string,
  orderCreatedAt: string,
  reviewStatus: string,
  statusOfDelivery: string
};

export type TLetterInform = {
  id: number; // 14;
  page: number; // 1;
  photo_count: number; // 1;
  writing_pad_img_url: string; // 'https://postman123.s3.ap-northeast-2.amazonaws.com/products/Clipped_image_20240207_193409.png';
  stamp_id: number; // 4;
  writing_pad_id: number; // 2;
  send_address: string; // '서울 성동구 서울숲길 17 성수동1가, 성수파크빌';
  send_address_detail: string; // '길바닥';
  send_phone: string; // '01010101010';
  send_name: string; // '보내는';
  send_post_code: string; // '04766';
  delivery_address: string; // '안양교도소';
  delivery_address_detail: string; // '안양교도소';
  delivery_phone: string; // '경기도 안양우체국 사서함 101호';
  delivery_name: string; // '';
  delivery_post_code: string; // '14047';
  point: number; // 580;
};

export type TRecipe = {
  order_name: string; // 'Pad2, 1장 사진 1장 외 express우표';
  total_amount: number; // 4700;
  method: string; // '간편결제';
};
export type TTransaction = {
  transaction_id: number; // 1;
  user_id: number; //1;
  points_change: number; //100;
  transaction_type: string; // 'purchase';
  transaction_date: string; // '2024-01-01T10:21:37.000Z';
  description: string; // '포인트 구매';
};

export type TTotalPoint = {
  point: number;
};
export type TMypagePayment = {
  totalPoint: TTotalPoint[];
  transactions: TTransaction[];
};

export type TReviewPost = {
  reviewId: number;
  productId: number; // 1;
  userId: number; // 456;
  rating: number; // 5;
  content: string; // '이 상품 정말 좋아요!';
};
