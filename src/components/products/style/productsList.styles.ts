import styled from '@emotion/styled';

export const ProductList = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin-top: 50px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 768px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 15px;


  }
`;

export const ProductCard = styled.div`
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 8px;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    border: none;
    border-bottom: 1px solid #ddd;
    box-shadow: none;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  padding: 16px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: row;
  }
`;

export const ProductInfo = styled.div`
  padding: 16px;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  margin: 0 0 8px;

  &:hover {
    text-decoration: underline;
    color: blue;
  }
`;

export const ProductDescription = styled.div`
  font-size: 12px;
  color: #666;
  margin: 0 0 8px;

  @media (max-width: 768px) {
    text-align: start;
  }
`;

export const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #d32f2f;
  margin: 0 0 8px;
  display: flex;
  flex-direction: column;

  .productPrice {
    color: #d32f2f;
    margin-top: 10px;
    font-size: 18px;
  }

  .category {
    color: #666;
    margin-left: px;
  }

  .sendDate {
      margin-top: 10px;
      font-size: 14px;
      color : #888
    }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .category {
      margin-left: 0px;
      margin-top: 3px;
    }
    .productPrice {
      margin-top: 10px;
      font-size: 18px;
    }

    .sendDate {
      margin-top: 10px;
    }
  }
`;

export const ProductRating = styled.div`
  font-size: 14px;
  color: #ff9800;
  display: flex;
  align-items: center;

  &::before {
    content: '★';
    margin-right: 4px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;