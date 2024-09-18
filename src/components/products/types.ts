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
  

export interface PProductListProps {
    onCategoryChange: (category: string) => void;
    selectedCategory: string;
    items: Item[];
    isActive: boolean
}