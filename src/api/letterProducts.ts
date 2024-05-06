import axios from 'axios';
import {
  Data,
  DetailData,
  WritingPadDetailData,
  Reviews,
} from '@/type/letterProducts';

export const getProductList = async (page: number) => {
  return axios.get(`/product/?page=${page}`).then((res) => {
    const count: number = res.data.count.count;
    const letterProducts: Data[] = res.data.data;

    return { letterProducts, count };
  });
};

export const getProductSortList = async (page: number, sort: string) => {
  return axios
    .get(`/product/category/?page=${page}&category=${sort}`)
    .then((res) => {
      const productList: Data[] = res.data.data.productList;
      const count: number = res.data.data.count;

      return { productList, count };
    });
};

export const getProductDetail = async (productId: number) => {
  const res = await axios.get(`/product/${productId}`);
  const { productInfo, imgUrls } = res.data.data;

  const productDetail: DetailData = {
    id: productInfo.id,
    name: productInfo.name,
    description: productInfo.description,
    description_img_url: productInfo.description_img_url,
    price: productInfo.price,
    add_price: productInfo.add_price,
  };

  const writingPadDetail: WritingPadDetailData = {
    id: productInfo.writing_pad_detail_id,
    common: productInfo.writing_pad_detail_common,
    extra: productInfo.writing_pad_detail_extra,
    envelope: productInfo.writing_pad_detail_envelope,
    info: productInfo.writing_pad_detail_info,
    picture: productInfo.writing_pad_detail_picture,
  };

  return { productDetail, writingPadDetail, images: imgUrls };
};

export const getProductReview = async (productId: number, page: number) => {
  return axios.get(`product/${productId}/review?page=${page}`).then((res) => {
    const reviewResult: Reviews[] = res.data.data.reviewResult;
    const count: number = res.data.data.count;
    const score: number = res.data.data.score;

    return { reviewResult, count, score };
  });
};
