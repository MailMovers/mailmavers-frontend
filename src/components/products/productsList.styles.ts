import styled from '@emotion/styled';

export const ProductList = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const ProductCard = styled.div`
  width: 350px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  padding: 16px;
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

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 8px;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #d32f2f;
  margin: 0 0 8px;

  .price {
    color: #d32f2f;
  }

  .category {
    color: #666;
    margin-left: 8px;
  }
`;

export const ProductRating = styled.p`
  font-size: 14px;
  color: #ff9800;
  display: flex;
  align-items: center;

  &::before {
    content: '★';
    margin-right: 4px;
  }
`;