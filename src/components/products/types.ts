export interface Item {
  id: number;
  category: string;
  padImg1: string;
  name: string;
  // name: string;
  price: string;
  avgScore: string;
  reviewCount: string;
}

export interface PProductListProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
  items: Item[];
  isActive: boolean;
}
