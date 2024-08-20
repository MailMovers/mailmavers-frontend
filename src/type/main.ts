export type TNewProduct = {
  description: string; // 'test';
  id: number; // 1;
  imgUrl: string; // 'https://postman123.s3.ap-northeast-2.amazonaws.com/products/20240128_165851_720.jpg';
  name: string; // 'Pad1';
};


export interface MainPageUIProps {
  setProductId: (id: number) => void;
  goLetterProducts: () => void;
  goSignUp: () => void;
  goLetterDetail: (productId: number) => void;
  populars: TNewProduct[];
  reviewList: TNewProduct[];
}


