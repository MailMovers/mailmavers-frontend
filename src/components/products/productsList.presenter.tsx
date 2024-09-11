import * as S from "./productsList.styles"
import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react';

type ProductListPresenterProps = {
    products: {
      id: number;
      name: string;
      description: string;
      img_url_1: string;
      price: string;
      rating: string;
      reviewCount: number;
    }[];
  };

export default function ProductListPresenter({ products }: ProductListPresenterProps){  
  const [items, setItems] = useState(products.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);

  const loadMore = (page: number) => {
    const newItems = products.slice(page * 10, (page + 1) * 10);
    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prevItems) => [...prevItems, ...newItems]);
    }
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<div key={0}>Loading...</div>}
    >
      <S.ProductList>
        {items.map((product) => (
          <S.ProductCard key={product.id}>
            <S.ProductImage src={product.img_url_1} alt={product.name} />
            <S.ProductInfo>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductDescription>{product.description}</S.ProductDescription>
              <S.ProductPrice>
                <span className="price">{product.price}</span>
                <span className="category">기본</span>
              </S.ProductPrice>
              <S.ProductRating>
                {product.rating} ({product.reviewCount} 리뷰)
              </S.ProductRating>
            </S.ProductInfo>
          </S.ProductCard>
        ))}
      </S.ProductList>
    </InfiniteScroll>
  );
};