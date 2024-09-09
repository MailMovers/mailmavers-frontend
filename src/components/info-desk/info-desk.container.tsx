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
  { id: '1', category: '4', question: '이미발송중인 편지는 환불할 수 있나요?', answer: ['우채국 접수가 완료된 편지는 (일부항목 제외) 회수할수 없으며 환불이 불가 합니다.'] },
  { id: '2', category: '4', question: '편지를 발송하지 않고 환불할 수 있나요?', answer: ['우체국 접수전 편지는 발송되지않고, 환불규정에 따라 환불 가능합니다.'] },
  { id: '3', category: '4', question: '환불신청은 어떻게 하나요?', answer: ['우체국에 접수 전인 편지는 로그인 후 마이페이지 보낸편지 내역에서 가능합니다.'] },
  { id: '6', category: '4', question: '결제수단을 추가하고 싶어요.', answer: ['결재수단은 현재 제휴업체 토스페이먼츠와 연동이 되어있으며, 해당 서비스로 추가 후 이용부탁드립니다.']  },
  { id: '4', category: '4', question: '결제취소 하고 싶어요.', answer: ['로그인 후 마이페이지 보낸편지내역에서 취소 하실수있습니다.'] },
  { id: '5', category: '4', question: '환불까지 얼마나 걸리나요?', answer: ['환불은 토스페이먼츠 규정에 따라 최대 7일까지 소요됩니다.'] },
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

    />
  );
};

export default FAQContainer;