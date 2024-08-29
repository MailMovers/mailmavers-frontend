import React from 'react';
import { FAQCategory, FAQItem } from './info-desk.types';
import * as S from './info-desk.styles';
import SearchbarContainer from './searchbar.container';
import { ChangeEvent } from 'react';


type Props = {
  categories: FAQCategory[];
  selectedCategory: string;
  faqs: FAQItem[];
  onSelectCategory: (category: string) => void;
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FAQPresenter: React.FC<Props> = ({ categories, selectedCategory, faqs, onSelectCategory, onChangeSearchbar }) => {
  return (
    <S.Container>
        <S.Title>자주묻는질문</S.Title>

        <S.Line />
      <S.CategoryList>
        {categories.map((category) => (
            <S.CategoryItem
            key={category.id}
            selected={category.id === selectedCategory}
            onClick={() => onSelectCategory(category.id)}
            >
            {category.name}
          </S.CategoryItem>
        ))}
        <SearchbarContainer onChangeSearchbar={onChangeSearchbar} />
      </S.CategoryList>
      <S.FAQList>
        {faqs.map((faq) => (
          <S.FAQCard key={faq.id}>
            <S.FAQTags>
              {faq.tags.map((tag, index) => (
                  <S.FAQTag key={index}>{tag}</S.FAQTag>
                ))}
            </S.FAQTags>
                <S.FAQQuestion>{faq.question}</S.FAQQuestion>
          </S.FAQCard>
        ))}
      </S.FAQList>
    </S.Container>
  );
};

export default FAQPresenter;