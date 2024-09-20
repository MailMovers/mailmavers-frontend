import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductReviewListUI from "./productReviewList.presenter";
import { IProductReview } from "./productReviewList.types";

export default function ProductList(): JSX.Element {
  const router = useRouter();
  if (typeof router.query.productId !== "string") return <></>;

  const [data, setData] = useState<IProductReview[]>([
    {
      _id: "1",
      writer: "John Doe",
      contents: "This is a comment",
      createdAt: new Date().toISOString(),
      rating: 5,
    },
    {
      _id: "2",
      writer: "Jane Doe",
      contents: "This is another comment",
      createdAt: new Date().toISOString(),
      rating: 4,
    },
    {
      _id: "3",
      writer: "John Doe",
      contents: "This is a comment",
      createdAt: new Date().toISOString(),
      rating: 5,
    },
    {
      _id: "4",
      writer: "Jane Doe",
      contents: "This is another comment",
      createdAt: new Date().toISOString(),
      rating: 4,
    }, {
      _id: "5",
      writer: "John Doe",
      contents: "This is a comment",
      createdAt: new Date().toISOString(),
      rating: 5,
    },
    {
      _id: "6",
      writer: "Jane Doe",
      contents: "This is another comment",
      createdAt: new Date().toISOString(),
      rating: 4,
    }, {
      _id: "7",
      writer: "John Doe",
      contents: "This is a comment",
      createdAt: new Date().toISOString(),
      rating: 5,
    },
    {
      _id: "8",
      writer: "Jane Doe",
      contents: "This is another comment",
      createdAt: new Date().toISOString(),
      rating: 4,
    },
  ]);

  const fetchReviews = async (): Promise<void> => {
    console.log("Fetch Comments");
  };

  const onLoadMore = async (): Promise<void> => {
    console.log("Load More Comments");
  };

  useEffect(() => {
    void fetchReviews();
  }, [router.query.productId]);

  return <ProductReviewListUI data={data} onLoadMore={onLoadMore} />;
}