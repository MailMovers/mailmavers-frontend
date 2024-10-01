import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 50px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid lightgray;
  border-radius: 10px 10px 0 0;
  background-image: url('/images/bottom.SVG.png');
  background-size: cover;
  background-position: top;

  @media (max-width: 768px) {
    height: 100px;
    border-radius: 0;
  }
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const SubTitle = styled.div`
  font-size: 26px;
  font-weight: 400;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const TitleContent = styled.span`
  font-size: 26px;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 26px;

  p {
    color: var(--default, #333);
    font-size: 26px;
    font-weight: 500;
  }
`;

export const CardContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 0;
  }
`;

export const CardWrap = styled.div<{ isLast?: boolean }>`
  width: 1200px;
  height: 150px;
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  border-bottom: 1px dashed #999;
  gap:30px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding: 20px;
  }
`;

export const ImgScoreWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;

export const ReviceImage = styled(Image)`
  height: 70px;
  width: 120px;
`;

export const ReviewContentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReviewContent = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    font-size: 12px;
    overflow: auto;
    scrollbar-width: none;
  }
`;

export const ReviewDate = styled.div`
  font-size: 12px;
`;

export const ScoreWrap = styled.div`
  display: flex;
  justify-content: start;
`;

export const ScoreImage = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const DeleteBtn = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: end;
  align-items: end;
  cursor: pointer;

  &:hover {
    color: #999;
  }

  &:active {
    color: #000;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const MobileDeleteBtn = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #999;
    border-radius: 5px;
    color: red;
    font-size: 12px;

    &:active {
      background-color: #999;
      color: white;
    }
  }
`;

export const MobileImgDeleteBtnWrapper = styled.div`
  // display: none;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;



export const EmptyMessage = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #999;
  margin: 50px 0;

  @media (max-width: 768px) {
    font-size: 12px;
    height: 200px;
  }
`;

export const PaginationContainer = styled.div`
`;


