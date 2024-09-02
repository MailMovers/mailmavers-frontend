/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Common } from 'styles/common';


const Footer = () => {


  return (
    <Frame>
      <Wrap>
        <div css={footerContent}>
          <div className='category'>
            <span className='normal'>회사소개</span>
            <Link href={'/terms'}>
              <span className='strong'>이용약관</span>
            </Link>
            <Link href={'/privacy'}>
              <span className='normal'>개인정보처리방침</span>
            </Link>
            <span className='strong'>사업제휴</span>
          </div>


            <div className='company_info mobile'>
              <p className='green_text'>메일트리</p>
              <p className='gray_text'>
                대표: 김창훈 | 사업자등록번호: 176-07-02809 | 통신판매업신고:
                2024-대전서구-0889
              </p>
              <p className='gray_text'>
                E-mail: mailtreeletterservice@gmail.com | 주소: 대전광역시 서구
                도안중로305번안길 7-22, 3층 302호(도안동, 피렌체)
              </p>
              <br />
              <br />
              <p className='gray_text'>
                메일트리© 메일트리 Co., Ltd. All rights reserved.
              </p>
            </div>
        </div>
        <div css={footerContent}>
          <div className='service_center'>
            <p className='strong'>고객센터</p>
            <p className='strong'>1600-0000</p>
            <br />
            <p>
              <span className='grey999'>운영시간 </span>
              <span className='grey666'>
                오전 9시 ~ 오후 18시 (토/일/공휴일 휴무)
              </span>
            </p>
            <p>
              <span className='grey999'>점심시간 </span>
              <span className='grey666'>오후 1시 ~ 오후 2시</span>
            </p>
          </div>
        </div>
      </Wrap>
    </Frame>
  );
};

export default Footer;

const Frame = styled.div`
  border-top: 1px solid #f3f3f3;
  margin-top: 150px;
  padding: 16px 0 80px 0;
  margin-left: 50px;
  width:1200px;
  margin: 0 auto;
  @media all and (min-width: 1200px) {
    min-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
  }

  @media all and (max-width: 767px) {
    width: 100%;
  }
`;

const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    gap: 2em;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 3em;
    gap: 2em;
  }

  @media all and (max-width: 767px) {
    flex-direction: column;
    padding: 0 1.5em;
    gap: 3em;
  }
`;

const footerContent = css`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .category {
    display: flex;
    align-items: center;
    font-size: 14px;

    @media all and (min-width: 1200px),
      all and (min-width: 768px) and (max-width: 1199px) {
      gap: 1.25em;
    }

    @media all and (max-width: 767px) {
      gap: 0.63em;
    }

    .normal {
      font-weight: 400;
      color: ${Common.colors.gray};
    }

    .strong {
      font-weight: 700;
      color: ${Common.colors.gray};
    }

    .normal,
    .strong {
      font-size: 1rem; // 기본 크기 설정
      @media all and (max-width: 767px) {
        font-size: 0.8rem; // 모바일에서 조정
      }
    }
  }

  .company_info {
    color: ${Common.colors.gray01};
    font-size: 12px;
    font-weight: 400;

    .green_text {
      color: ${Common.colors.theme};
    }

    .gray_text {
      color: ${Common.colors.gray01};

      @media all and (max-width: 480px) {
        margin: 5px 0;
      }
    }
  }

  .service_center {
    @media all and (min-width: 1200px) {
      margin-right: 8.44em;
    }

    .strong {
      color: ${Common.colors.theme};
      font-size: 16px;
      font-weight: 500;
    }

    span {
      font-size: 12px;
      font-weight: 400;
    }

    .grey999 {
      color: var(--grey999, #999);
    }

    .grey666 {
      color: var(--grey666, #666);
    }
  }
`;
