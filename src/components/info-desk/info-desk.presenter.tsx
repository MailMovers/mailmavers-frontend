import React from 'react';
import { FAQCategory, FAQItem } from './info-desk.types';
import * as S from './info-desk.styles';




type Props = {
  categories: FAQCategory[];
  selectedCategory: string;
  faqs: FAQItem[];
  onSelectCategory: (category: string) => void;
};

const FAQPresenter: React.FC<Props> = ({ categories, selectedCategory, faqs, onSelectCategory }) => {
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

      </S.CategoryList>
      <S.FAQList>

        {faqs.map((faq) => (
          <S.FAQCard key={faq.id}>
            <S.FAQTags>
              <S.FAQTitle>회원님들의 자주묻는 질문입니다.</S.FAQTitle>
            <S.FAQIcon>?</S.FAQIcon>
            </S.FAQTags>
                <S.FAQQuestion>{faq.question}</S.FAQQuestion>
                <S.FAQAnswer>{faq.answer}</S.FAQAnswer>
          </S.FAQCard>
        ))}
      </S.FAQList>
    </S.Container>
  );
};

export default FAQPresenter;