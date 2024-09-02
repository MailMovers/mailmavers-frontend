import { ChangeEvent } from "react";


export type FAQCategory = {
    id: string;
    name: string;
  };
  
  export type FAQItem = {
    id: string;
    category: string;
    question: string;
    tags: string[];
  };
  export interface ISearchbarsProps {
    onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  