export interface Card {
    title: string;
    content: string;
    icon: string;
    step: string;
  }
  
  export interface BannerProps {
    cards: Card[];
  }