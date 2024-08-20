import * as S from "./main.styles"
import Link from 'next/link';
import { MailOutlined } from '@ant-design/icons';
import { MainPageUIProps } from "@/type/main"; 

export default function MainPageUI(props: MainPageUIProps) {

    return (
      <div css={S.mainWrap}>
        <S.BannerWrap>
          <img src='/images/main_img.svg' alt='메인 이미지' css={S.bannerImg} />
        </S.BannerWrap>
  
        <S.Content>
          <div css={S.mainTitleWrap}>
            <div css={S.mainTextWrap}>
              <p className='text_category'>Best</p>
              <p css={S.textSubCategory}>인기 많아요</p>
            </div>
            <button
              type='button'
              css={S.bestTextSub}
              onClick={() => props.goLetterProducts()}
            >
              전체보기
            </button>
          </div>
  
          <div css={S.bestImgContainer}>
            <ul className='bestImgContentWrap'>
              {props.populars.map((popular) => (
                <li
                  css={S.bestContent}
                  key={popular.id}
                  onClick={() => props.goLetterDetail(popular.id)}
                >
                  <div className='best_img_wrap'>
                    <img
                      className='best_img'
                      src={popular.imgUrl}
                      alt={popular.name}
                    />
                  </div>
                  <p className='best_title'>{popular.name}</p>
                  <p className='best_desc'>{popular.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </S.Content>
  
        <div css={S.bannerWrap}>
          <div className='banner_content'>
            <div className='banner_text'>
              <span>지금</span>
              {` `}
              <strong>회원가입</strong>
              {` `}
              <span>하면</span>
              {` `}
              <strong>우편배송비 공짜 !</strong>
            </div>
  
            <button css={S.signUpBtn} onClick={props.goSignUp}>
              회원가입 {`>`}
            </button>
          </div>
        </div>
  
        <div css={S.howWrap}>
          <div className='how_contents_wrap'>
            <p css={S.textSubCategory}>메일트리 이용방법</p>
            <div css={S.howContainer}>
              <div css={S.howContent}>
                <S.HowIcon src={'/icon/letter.svg'}>
                  <div className='icon_img' />
                </S.HowIcon>
  
                <div className='how_text'>
                  <p className='how_text_main'>편지지 / 봉투 선택 및 작성</p>
                  {/* <p className='how_text_sub'>편지지 / 봉투 선택 및 작성</p> */}
                </div>
              </div>
  
              <div css={S.howContent}>
                <S.HowIcon src={'/icon/picture.svg'}>
                  <div className='icon_img' />
                </S.HowIcon>
  
                <div className='how_text'>
                  <p className='how_text_main'>사진 추가</p>
                  {/* <p className='how_text_sub'>편지지 / 봉투 선택 및 작성</p> */}
                </div>
              </div>
              <div css={S.howContent}>
                <S.HowIcon src={'/icon/picture.svg'}>
                  <div className='icon_img' />
                </S.HowIcon>
  
                <div className='how_text'>
                  <p className='how_text_main'>우편 종류 선택</p>
                  {/* <p className='how_text_sub'>편지지 / 봉투 선택 및 작성</p> */}
                </div>
              </div>
  
              <div css={S.howContent}>
                <S.HowIcon src={'/icon/paper_plane.svg'}>
                  <div className='icon_img' />
                </S.HowIcon>
  
                <div className='how_text'>
                  <p className='how_text_main'>우체국 발송</p>
                  {/* <p className='how_text_sub'>편지지 / 봉투 선택 및 작성</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <S.Content style={{ marginTop: '8.81em' }}>
          <div css={S.mainTitleWrap}>
            <div />
            <div css={S.mainTextWrap}>
              <p className='text_category'>Review</p>
              <p css={S.textSubCategory}>이용후기</p>
            </div>
            <div />
          </div>
  
          <div css={S.ReviewImgContainer}>
            <ul className='bestImgContentWrap'>
              {props.reviewList.map((review) => (
                <li css={S.bestContent} key={review.id}>
                  <div className='best_img_review_wrap'>
                    <img
                      className='best_img'
                      src={review.imgUrl}
                      alt={review.name}
                    />
                  </div>
                  <p className='best_title'>{review.name}</p>
                  <p className='best_desc'>{review.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </S.Content>
  
        <S.MailBtn>
          <Link href={'/letterproducts'}>
            <MailOutlined />
          </Link>
        </S.MailBtn>
      </div>
    );
  }
  
  