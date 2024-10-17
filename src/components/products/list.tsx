import * as S from "./style/productsList.styles";
import * as SM from "./style/menubar.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineFile } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import { SiTinyletter } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { Item, PProductListProps } from "./types";
import BannerContainer from "./slide-banner";
import { IconStyle } from "./style/menubar.styles";
import { useMoveToPage } from "@/hooks/useMoveToPage";
import { fetchProducts } from "./axios";

const menuItems = [
  {
    icon: (
      <IconStyle>
        <AiOutlineMenu id="burgerIcon" />
      </IconStyle>
    ),
    category: "전체보기",
  },
  {
    icon: (
      <IconStyle>
        <IoColorPaletteOutline id="colorLetter" />
      </IconStyle>
    ),
    category: "컬러편지지",
  },
  {
    icon: (
      <IconStyle>
        <AiOutlineFile id="none" />
      </IconStyle>
    ),
    category: "일반편지지",
  },
  {
    icon: (
      <IconStyle>
        <SiTinyletter id="best" />
      </IconStyle>
    ),
    category: "인기순",
  },
  {
    icon: (
      <IconStyle>
        <FaStar id="star" />
      </IconStyle>
    ),
    category: "리뷰순",
  },
];

export default function ProductList(props: PProductListProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("전체보기");
  const [page, setPage] = useState(0);
  const { onClickMoveToPage } = useMoveToPage();

  // 카테고리가 변경될 때 필터링된 아이템을 다시 불러옴
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(
          0,
          selectedCategory === "전체보기" ? undefined : selectedCategory
        );
        setItems(data);
        setHasMore(data.length === 6);
        setPage(1); // 페이지를 1로 초기화
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, [selectedCategory]); // selectedCategory가 변경될 때마다 useEffect 실행

  // 무한 스크롤로 더 많은 아이템을 불러오는 함수
  const loadMore = (page: number) => {
    const filteredItems =
      selectedCategory === "전체보기"
        ? items
        : items.filter((item) => item.category === selectedCategory);
    const newItems = filteredItems.slice(page * 10, (page + 1) * 10);

    setItems((prevItems) => [...prevItems, ...newItems]);
    setHasMore(filteredItems.length > (page + 1) * 10);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <BannerContainer />
      <SM.MenuBarWrapper>
        <SM.MenuList>
          {menuItems.map(({ icon, category }) => (
            <SM.MenuItem
              key={category}
              onClick={() => handleCategoryChange(category)}
              isActive={selectedCategory === category}
            >
              {icon}
              {category}
            </SM.MenuItem>
          ))}
        </SM.MenuList>
      </SM.MenuBarWrapper>

      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<div key={0}>Loading...</div>}
      >
        <S.ProductList>
          {items.map((product: Item, id) => (
            <S.ProductCard
              key={product.id}
              onClick={onClickMoveToPage(`/product/${id}`)}
            >
              <S.ProductImage src={product.padImg1} />
              <S.ProductInfo>
                <S.ProductName>{product.name}</S.ProductName>
                <S.ProductDescription>{product.name}</S.ProductDescription>
                <S.ProductPrice>
                  <span className="category">상품종류: {product.category}</span>
                  <span className="productPrice">{product.price} 원</span>
                  <span className="sendDate">내일 모레 도착 예정</span>
                </S.ProductPrice>
                <S.ProductRating>
                  {product.avgScore} ({product.reviewCount} 리뷰)
                </S.ProductRating>
              </S.ProductInfo>
            </S.ProductCard>
          ))}
        </S.ProductList>
      </InfiniteScroll>
    </>
  );
}
