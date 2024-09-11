export type Product = {
    id: number;
    name: string;
    description: string;
    img_url_1: string;
    price: string;
    rating: string;
    reviewCount: number;
  };
  
  export const mockLetterProductList: Product[] = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description: `Description for product ${index + 1}`,
    img_url_1: `https://via.placeholder.com/150?text=Product+${index + 1}`,
    price: `${(index + 1) * 1000}원`,
    rating: (Math.random() * 5).toFixed(1),
    reviewCount: Math.floor(Math.random() * 100),
  }));