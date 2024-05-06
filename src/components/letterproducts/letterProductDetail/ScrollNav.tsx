'use client';
/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { windowSizeWidthAtom } from '@/recoil/width/atom';
import { Common } from 'styles/common';

export type ScrollNavProps = {
  isFixed: boolean;
};

const ScrollNav = ({ isFixed }: ScrollNavProps) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const windowSizeWidth = useRecoilValue(windowSizeWidthAtom);

  const handleNavBtn = (place: 'productDetail' | 'review') => {
    const element = document.getElementById(place);
    if (element && windowSizeWidth > 767) {
      window.scrollTo({ top: element.offsetTop - 78, behavior: 'smooth' });
    } else if (element && windowSizeWidth <= 767) {
      window.scrollTo({ top: element.offsetTop - 168, behavior: 'smooth' });
    }
  };

  const calcScrollNavPosition = () => {
    const scrollY = window.scrollY;
    const productDetailSection = document.getElementById('productDetail');
    const reviewSection = document.getElementById('review');
    let productDetailOffsetTop: number = 0;
    let reviewOffsetTop: number = 0;

    if (productDetailSection && reviewSection) {
      if (windowSizeWidth > 767) {
        productDetailOffsetTop = productDetailSection.offsetTop - 83;
        reviewOffsetTop = reviewSection.offsetTop - 83;
      } else if (windowSizeWidth <= 766) {
        productDetailOffsetTop = productDetailSection.offsetTop - 168;
        reviewOffsetTop = reviewSection.offsetTop - 168;
      }

      if (scrollY >= productDetailOffsetTop && scrollY < reviewOffsetTop) {
        setActiveSection('productDetail');
      } else if (scrollY >= reviewOffsetTop) {
        setActiveSection('review');
      } else {
        setActiveSection('');
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      calcScrollNavPosition();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowSizeWidth]);

  return (
    <ScrollNavContainer isFixed={isFixed}>
      <ScrollNavItem isActive={activeSection === 'productDetail'}>
        <button onClick={() => handleNavBtn('productDetail')}>제품 상세</button>
      </ScrollNavItem>
      <ScrollNavItem isActive={activeSection === 'review'}>
        <button onClick={() => handleNavBtn('review')}>리뷰</button>
      </ScrollNavItem>
    </ScrollNavContainer>
  );
};

export default ScrollNav;

const ScrollNavContainer = styled.ul<{ isFixed: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  position: ${(props) => (props.isFixed ? 'fixed' : 'relative')};
  background: ${Common.colors.white};
  transition: all 0.3s ease;
  z-index: 90;

  @media all and (min-width: 1200px), all and (min-width: 768px) and (max-width: 1199px) {
    top: ${(props) => (props.isFixed ? 0 : 'auto')};
  }

  @media all and (max-width: 767px) {
    top: ${(props) => (props.isFixed ? '85px' : 'auto')};
  }
`;

const ScrollNavItem = styled.li<{ isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25em;
  width: 7.5em;
  font-size: ${Common.fontSize.fs18};
  font-weight: 500;
  border-bottom: 2px solid ${(props) => (props.isActive ? Common.colors.theme : 'transparent')};

  button {
    background: transparent;
    color: ${(props) => (props.isActive ? Common.colors.black : Common.colors.gray01)};
  }
`;
