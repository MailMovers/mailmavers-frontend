import React, { useState } from 'react';
import FAQPresenter from './info-desk.presenter';
import { FAQCategory, FAQItem } from './info-desk.types';
import { ChangeEvent } from 'react';

const categories: FAQCategory[] = [
  { id: '1', name: '계정' },
  { id: '2', name: '편지' },
  { id: '3', name: '신고/이용제한' },
  { id: '4', name: '결제' },
  { id: '5', name: '공지사항' },
];

const faqs: FAQItem[] = [
  { id: '1', category: '4', question: '이미발송중인 편지는 환불할 수 있나요?', tags: ['환불', '결제 취소'] },
  { id: '2', category: '4', question: '편지를 발송하지 않고 환불할 수 있나요?', tags: ['환불', '결제 취소'] },
  { id: '3', category: '4', question: '환불신청은 어떻게 하나요?', tags: ['환불', '결제 취소'] },
  { id: '6', category: '4', question: '결제수단을 변경하고 싶어요.', tags: ['결제수단', '결제일 변경'] },
  { id: '4', category: '4', question: '결제수단을 삭제하고 싶어요.', tags: ['결제수단', '정기결제'] },
  { id: '5', category: '4', question: '아직 발송전인 편지는 어떻게 환불 하나요?', tags: ['환불', '결제일 변경'] },
];

const FAQContainer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [filteredFAQ, setFilteredFAQs] = useState<FAQItem[]>(faqs);
  const filteredFAQs = faqs.filter((faq) => faq.category === selectedCategory);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    const filteredFAQ = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFAQs(filteredFAQ);
  };

  return (
    <FAQPresenter
      categories={categories}
      selectedCategory={selectedCategory}
      faqs={filteredFAQs}
      onSelectCategory={setSelectedCategory}
      onChangeSearchbar={onChangeSearchbar}
    />
  );
};

export default FAQContainer;