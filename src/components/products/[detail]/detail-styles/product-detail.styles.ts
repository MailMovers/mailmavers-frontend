import styled from '@emotion/styled';
import { Common } from '@/styles/common';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width:  768px) {
    flex-direction: column;

}
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #f5f5f5;
  margin: 20px 0;

  @media (max-width:  768px) {
    width: 100%;

}
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px; 

  @media (max-width:  768px) {
    flex-direction: column;
}
`;

export const DescriptionImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 100px;


  @media (max-width:  768px) {
    margin-bottom: 50px;

}
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: ${Common.colors.yellow};
  font-size: 18px;
  margin: 20px 0;
`;

export const DescriptionImg = styled.img`
  width: 100%;
  max-width: 1000px;

  @media (max-width:  768px) {
    width: 100%;
    padding: 10px;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
  margin-top: 20px;

  @media (max-width:  768px) {
    gap: 20px;
    margin-top: 30px;

}

`;

export const ImageSection = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const MainImage = styled.img`
  width: 100%;
  height: 600px;
  padding: 40px;


  @media (max-width:  768px) {
    width: 100%;
    padding: 0px 0px 0px 0px;
    height: 400px;
}
`;

export const InfoSection = styled.div`
  flex: 50%;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  @media (max-width:  768px) {
    width: 100%;
    padding: 20px 0px 0px 0px;

}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media (max-width:  768px) {
    font-size: 20px;
}
`;

export const Badge = styled.span`
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 5px;
  margin-left: 10px;
  border-radius: 3px;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  color: gray;
  @media (max-width:  768px) {
    font-size: 14px;
}
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OriginalPrice = styled.span`
  font-size: 18px;
  text-decoration: line-through;
  margin-bottom: 5px;

  @media (max-width:  768px) {
    font-size: 16px;
}
`;

export const DiscountedPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: red;
  margin-bottom: 5px;
  @media (max-width:  768px) {
    font-size: 20px;
}
`;

export const DiscountRate = styled.span`
  font-size: 16px;
  color: green;

  @media (max-width:  768px) {
    font-size: 14px;
}
`;

export const ProductDetails = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;

  @media (max-width:  768px) {
    padding-bottom: 10px;
    margin-bottom: 10px;

}
`;

export const DetailItem = styled.div`
  margin-bottom: 10px;

  @media (max-width:  768px) {
    margin-bottom: 5px;
}
`;

export const DetailTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width:  768px) {
    font-size: 12px;
  }
`;

export const DetailContent = styled.div`
  font-size: 14px;
  color: gray;
  @media (max-width:  768px) {
    font-size: 10px;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 20px;
  background-color: green;

  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${Common.colors.yellow};
  }
`;
