import React, { useState, useEffect } from 'react';
import { BannerWrapper, Slide, SlideImage, Arrow } from './style/slide-banner.styles';

// 슬라이드 데이터
const slides = [
  {
    text: '마땡킴',
    subtext: '명동 플래그십 스토어 오픈',
    image: '/images/bottom.SVG.png',
  },
  {
    text: '슬라이드 2',
    subtext: '설명 2',
    image: '/images/bottom.SVG.png',
  },
];

// React.memo를 사용한 최적화된 배너 컴포넌트
const Banner = React.memo(({ currentIndex }: { currentIndex: number }) => {
  return (
    <Slide key={currentIndex} active={true}>
      <SlideImage src={slides[currentIndex].image} />
    </Slide>
  );
});

const BannerContainer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <BannerWrapper>
      {isClient && (
        <>
          <Arrow onClick={prevSlide}>&lt;</Arrow>
          <Banner currentIndex={currentIndex} />
          <Arrow onClick={nextSlide}>&gt;</Arrow>
        </>
      )}
    </BannerWrapper>
  );
};

export default BannerContainer;
