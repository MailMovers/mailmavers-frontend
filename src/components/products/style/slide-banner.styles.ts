import styled from '@emotion/styled';

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const Slide = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  width: 100%;
  transition: opacity 0.5s ease-in-out;
  position: relative;
`;

export const SlideImage = styled.img`
  width: 100%; /* 1200px에서 100%로 변경하여 반응형 디자인 지원 */
  height: auto; /* 비율을 유지하기 위해 auto로 설정 */
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  cursor: pointer;
  z-index: 10;

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;