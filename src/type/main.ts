

export type TNewProduct = {
  description: string; // 'test';
  id: number; // 1;
  imgUrl: string; // 'https://postman123.s3.ap-northeast-2.amazonaws.com/products/20240128_165851_720.jpg';
  name: string; // 'Pad1';
};

export interface Item {
  id: number;
  category: string;
  productImage: string;
  productTitle: string;
  productSubTitle: string;
  productPrice: string;
  productStarRate: string;
  productReviewCount: string;
}

export interface MainPageUIProps {
  goLetterProducts: () => void;
  goSignUp: () => void;
  goLetterDetail: (productId: number) => void;
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
  items: Item[];
  isActive: boolean;
};


