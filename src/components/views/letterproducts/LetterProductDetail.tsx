/** @jsxImportSource @emotion/react */

import { useRecoilValue, useRecoilState } from 'recoil';
import {
  sortAtom,
  ActiveTabAtom,
  productIdAtom,
} from '@/recoil/letter-product/atom';
import { windowSizeWidthAtom } from '@/recoil/width/atom';
import { tokenAtom } from '@/recoil/auth/atom';
import {
  DetailData,
  Reviews,
  sortList,
  WritingPadDetailData,
} from '@/type/letterProducts';
import { getProductDetail, getProductReview } from '@/api/letterProducts';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import * as S from './LetterProductDetail.styles';
import Tab from '@/components/letterproducts/Tab';
import ProductDescrip from '@/components/letterproducts/letterProductDetail/ProductDescrip';
import ProductReview from '@/components/letterproducts/letterProductDetail/ProductReview';
import ScrollNav from '@/components/letterproducts/letterProductDetail/ScrollNav';

const LetterProductDetail = () => {
  const [sort, setSort] = useRecoilState(sortAtom);
  const [activeTab, setActiveTab] = useRecoilState(ActiveTabAtom);
  const token = useRecoilValue(tokenAtom);
  const productId = useRecoilValue(productIdAtom);
  const windowSizeWidth = useRecoilValue(windowSizeWidthAtom);
  const [tabTitle, setTabTitle] = useState<string>('');
  const [letterProductDetail, setLetterProductDetail] = useState<DetailData>();
  const [writingPadDetail, setWritingPadDetail] =
    useState<WritingPadDetailData>();
  const [images, setImages] = useState<string[]>([]);
  const [prevImg, setPrevImg] = useState<string>('');
  const [prevImgIndex, setPrevImgIndex] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [reviewTotalCount, setReviewTotalCount] = useState<number>(0);
  const [reviewTotalScore, setReviewTotalScore] = useState<number>(0);
  const [reviewList, setReviewList] = useState<Reviews[]>([]);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [contentsHeight, setContentsHeight] = useState<number | null>(null);
  const [productImgWidth, setProductImgWidth] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const tabContentRef = useRef<HTMLDivElement | null>(null);
  const productImg = useRef<HTMLLIElement | null>(null);
  const router = useRouter();
  const addPrice = letterProductDetail?.add_price.toLocaleString('en-US');
  const price = letterProductDetail?.price.toLocaleString('en-US');
  const writingPadDetailDataDefault = {
    id: 1,
    name: '편지지',
    common: '봉투 1장, 편지지 3장',
    extra: '봉투 1장, 편지지 3장',
    envelope: '크기 12cm X 18cm (100g/㎡), 크라프트지, 덮개형 봉투',
    info: '크기 14.6cm x 21cm (100g/㎡), 모조지, 양면',
    picture: '크기 4x6(inch) 10cm x 15.2cm(240g/㎡) Luster paper',
  };

  const handleSort = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setActiveTab(index);

    const sort = e.currentTarget.innerText;
    setTabTitle(sort);
    setSort(sortList[sort]);

    localStorage.removeItem('product');
    router.push('/letterproducts');
  };

  const goWriteLetter = () => {
    if (token?.accessToken) {
      router.push(`/letter/select/${productId}`);
    } else {
      if (window.confirm('로그인이 필요합니다.')) {
        localStorage.setItem('상세페이지에서로그인', 'true');
        router.push('/login');
      }
    }
  };

  const handlePrevImg = (img: string, index: number) => {
    setPrevImg(img);
    setPrevImgIndex(index);
  };

  const scrollFunction = () => {
    const contentHeight = contentRef.current
      ? getContentBoxHeight(contentRef.current)
      : 0;
    const tabContentHeight = tabContentRef.current
      ? getContentBoxHeight(tabContentRef.current)
      : 0;

    setContentsHeight(contentHeight + tabContentHeight);

    function getContentBoxHeight(element: HTMLElement) {
      const styles = window.getComputedStyle(element);
      const marginTop = parseFloat(styles.marginTop) || 0;
      const marginBottom = parseFloat(styles.marginBottom) || 0;
      return element.offsetHeight + marginTop + marginBottom;
    }
  };

  useEffect(() => {
    const productId = Number(localStorage.getItem('product'));
    getProductDetail(productId).then(
      ({ productDetail, writingPadDetail, images }) => {
        const imagesValue = images.map(
          (item: string) => Object.values(item)[0]
        );

        setLetterProductDetail(productDetail);
        setWritingPadDetail(writingPadDetail);
        setImages(imagesValue);
        setPrevImg(imagesValue[0]);
      }
    );

    switch (sort) {
      case '':
        setTabTitle('전체보기');
        break;
      case 'new':
        setTabTitle('신상');
        break;
      case 'none':
        setTabTitle('무지편지지');
        break;
      case 'photo':
        setTabTitle('포토편지지');
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      scrollFunction();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowSizeWidth]);

  useEffect(() => {
    if (productImg.current) {
      const width = productImg.current.offsetWidth;
      setProductImgWidth(width);
    }
  }, [windowSizeWidth, images]);

  useEffect(() => {
    if (contentsHeight && windowSizeWidth > 767) {
      setIsFixed(scrollPosition > contentsHeight + 85);
    } else if (contentsHeight && windowSizeWidth <= 767) {
      setIsFixed(scrollPosition > contentsHeight);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const productId = Number(localStorage.getItem('product'));
    getProductReview(productId, page).then(({ reviewResult, count, score }) => {
      if (page === 1) {
        setReviewList(reviewResult);
      } else {
        setReviewList((prevReviewList) => [...prevReviewList, ...reviewResult]);
      }

      setReviewTotalCount(count);
      setReviewTotalScore(score);
    });
  }, [page]);

  return (
    <div css={S.ProductsWrap}>
      <div css={S.ProductsPage}>
        <div ref={tabContentRef} css={S.MobileTabWrap}>
          <Tab activeTab={activeTab} onClick={handleSort} />
        </div>
        <div css={S.ProductsPageMobile} ref={contentRef}>
          <p css={S.TabTitle}>{tabTitle}</p>
          <div css={S.Product}>
            <ul css={S.ProductPrevImgWrap}>
              {Array.isArray(images) &&
                images.length > 0 &&
                images.map((image, index) => (
                  <S.ProductPrevImg
                    ref={productImg}
                    key={index}
                    imgWidth={productImgWidth}
                    onClick={() => handlePrevImg(image, index + 1)}
                  >
                    <img
                      css={S.Img}
                      src={image}
                      alt={`Product Preview ${index + 1}`}
                    />
                  </S.ProductPrevImg>
                ))}
            </ul>
            <div css={S.ProductDescripWrap}>
              <S.FirstImg windowSizeWidth={windowSizeWidth}>
                {images.length > 0 ? (
                  <img
                    css={S.Img}
                    src={prevImg}
                    alt={`Product Preview ${prevImgIndex}`}
                  />
                ) : (
                  <div css={S.EmptyImg}>등록된 이미지가 없습니다.</div>
                )}
              </S.FirstImg>
              <div css={S.ProductContent}>
                <div>
                  <h3 css={S.Title}>{letterProductDetail?.name}</h3>
                  <p css={S.SubTitle}>{letterProductDetail?.description}</p>
                  <p css={S.PriceWrap}>
                    <del css={S.FirstPrice}>{addPrice} 원</del>
                    <span css={S.Price}>
                      {price} <span css={S.PriceUnit}>원</span>
                    </span>
                  </p>
                  <ProductDescrip
                    writingPadDetail={
                      writingPadDetail
                        ? writingPadDetail
                        : writingPadDetailDataDefault
                    }
                  />
                </div>
                <div css={S.ButtonWrap}>
                  <button
                    css={S.ButtonYellowGreen}
                    type='button'
                    onClick={goWriteLetter}
                  >
                    편지쓰기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollNav isFixed={isFixed} />
        <div css={isFixed && S.ScrollNavHeight}></div>
        <div id='productDetail' css={S.DetailProduct}>
          <img
            css={S.DescriptionImg}
            src={letterProductDetail?.description_img_url}
            alt='상품정보'
          />
        </div>
        <ProductReview
          reviews={reviewList}
          totalCount={reviewTotalCount}
          reviewTotalScore={reviewTotalScore}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default LetterProductDetail;
