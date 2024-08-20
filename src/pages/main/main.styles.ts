import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Common = {
    colors: {
      theme: '#4A743C',
      yellowgreen: '#F8F7EA',
      yellow: '#FFB930',
      red: '#F00001',
  
      black: '#333333',
      gray: '#666666',
      gray01: '#999999',
      gray02: '#d9d9d9',
      gray03: '#f3f3f3',
      gray04: '#f6f6f6',
  
      white: '#ffffff',
    },
  
    fontSize: {
      title: '1.88em',
      fs28: '1.80em',
      fs26: '1.63em',
      fs24: '1.50em',
      fs20: '1.25em',
      fs18: '1.13em',
      fs16: '1.00em',
      fs14: '0.88em',
      fs12: '0.75em',
      fs10: '0.63em',
    },
  };

  export const mainWrap = css`
  @media all and (min-width: 1200px) {
    min-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    min-width: 768px;
  }

  @media all and (max-width: 767px) {
    min-width: 295px;
  }
`;

export const BannerWrap = styled.div`
  width: 100%;
  background: ${Common.colors.white};

  @media all and (min-width: 1200px) {
    justify-content: center;
    overflow: hidden;
  }

  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    overflow-x: auto;
    justify-content: start;

    ::-webkit-scrollbar {
      height: 12px;
    }

    ::-webkit-scrollbar-track {
      border: 1px solid ${Common.colors.gray04};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${Common.colors.gray04};
    }

    ::-webkit-scrollbar-track {
      background: ${Common.colors.white};
    }
  }

  @media all and (max-width: 767px) {
    height: auto;
  }
`;

export const bannerImg = css`
  width: 100%;

  @media all and (min-width: 323px) and (max-width: 767px) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
  margin: 0 auto;
  margin-top: 5.38em;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 3em;
  }

  @media all and (max-width: 767px) {
    padding: 0 1.5em;
  }
`;

export const mainTitleWrap = css`
  position: relative;
  width: 100%;
`;

export const mainTextWrap = css`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media all and (min-width: 1200px) {
    margin: 0 auto;
    align-items: center;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    margin: 0 auto;
    align-items: center;
  }

  @media all and (max-width: 767px) {
    align-items: start;
  }

  .text_category {
    color: ${Common.colors.theme};
    font-size: ${Common.fontSize.fs14};
    font-weight: 500;
  }
`;

export const textSubCategory = css`
  color: var(--default, #333);
  font-weight: 500;

  @media all and (min-width: 1200px) {
    font-size: ${Common.fontSize.title};
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${Common.fontSize.fs26};
  }

  @media all and (max-width: 767px) {
    font-size: ${Common.fontSize.fs24};
  }
`;

export const bestTextSub = css`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  color: var(--grey666, #666);
`;

export const bestImgContainer = css`
  width: 100%;

  .bestImgContentWrap {
    display: grid;

    @media all and (min-width: 1200px),
      all and (min-width: 768px) and (max-width: 1199px) {
      grid-template-columns: repeat(auto-fill, minmax(17.81em, 1fr));
      gap: 3.24em 1.25em;
      place-items: center;
    }

    @media all and (max-width: 767px) {
      place-items: center;
      gap: 3.75em;
    }
  }
`;

export const ReviewImgContainer = css`
  width: 100%;

  .bestImgContentWrap {
    display: grid;

    @media all and (min-width: 1200px),
      all and (min-width: 768px) and (max-width: 1199px) {
      grid-template-columns: repeat(auto-fill, minmax(24.16em, 1fr));
      gap: 3.24em 1.25em;
      place-items: center;
    }

    @media all and (max-width: 767px) {
      place-items: center;
      gap: 3.75em;
    }
  }
`;

export const bestContent = css`
  font-weight: 400;

  @media all and (min-width: 1200px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    font-size: ${Common.fontSize.fs16};
  }

  @media all and (max-width: 767px) {
    font-size: ${Common.fontSize.fs14};
  }

  .best_img_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17.81em;
    height: 11.81em;
    overflow: hidden;
    border-radius: 5px;

    .best_img {
      width: 100%;
    }
  }

  .best_img_review_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;

    .best_img {
      width: 100%;
    }

    @media all and (min-width: 1200px),
      all and (min-width: 436px) and (max-width: 1199px) {
      width: 24.16em;
      height: 22.25em;
    }

    @media all and (max-width: 435px) {
      width: 17.81em;
      height: 16.4em;
    }
  }

  .best_title {
    padding-top: 12px;
    color: var(--default, #333);
  }

  .best_desc {
    width: 100%;
    padding-top: 6px;
    color: var(--grey666, #666);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const bannerWrap = css`
  padding: 8em 0;

  @media all and (min-width: 1200px) {
    min-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    min-width: 768px;
  }

  @media all and (max-width: 767px) {
    min-width: 295px;
  }

  .banner_content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    background: var(--primary, #4a743c);

    @media all and (min-width: 1200px) {
      max-width: 1200px;
      padding: 2em 5em;
      border-radius: 5px;
    }

    @media all and (min-width: 768px) and (max-width: 1199px),
      all and (max-width: 767px) {
      padding: 3em 5em;
    }

    @media all and (max-width: 767px) {
      flex-direction: column;
      gap: 1.28em;
      padding: 2em 3em;
    }

    .banner_text {
      color: #fff;
      font-weight: 400;

      @media all and (min-width: 1200px) {
        font-size: ${Common.fontSize.fs24};
      }

      @media all and (min-width: 768px) and (max-width: 1199px) {
        font-size: ${Common.fontSize.fs20};
      }

      @media all and (min-width: 323px) and (max-width: 767px) {
        font-size: ${Common.fontSize.fs16};
      }

      @media all and (max-width: 322px) {
        font-size: ${Common.fontSize.fs14};
      }
    }
    span {
      color: #fff;
      font-size: ${Common.fontSize.fs14};
      font-weight: 400;
    }

    strong {
      color: #fff;
      font-weight: 700;
    }
  }
`;

export const signUpBtn = css`
  width: 9.56em;
  height: 2.19em;
  padding: 6px 22px;
  background: transparent;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
`;

export const howWrap = css`
  width: 100%;
  padding: 3.63em 0 4.63em 0;
  background: #f6f6f6;

  .how_contents_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
    margin: 0 auto;

    @media all and (min-width: 1200px) {
      max-width: 1200px;
    }
  }
`;

export const howContainer = css`
  @media all and (min-width: 1200px) {
    display: flex;
    gap: 3em;
    max-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px),
    all and (max-width: 767px) {
    display: grid;
    place-items: center;
    gap: 3em 20%;
    grid-template-columns: 40% 40%;
  }

  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 3em;
  }
`;

export const howContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 10.75em;

  .how_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: ${Common.fontSize.fs16};
    font-weight: 400;

    .how_text_main {
      color: var(--default, #333);
    }

    /* .how_text_sub {
      color: var(--grey666, #666);
    } */
  }
`;

export const HowIcon = styled.div<{ src: string }>`
  width: 145px;
  height: 145px;
  border-radius: 50%;
  background-color: #fff;

  .icon_img {
    width: 100%;
    height: 100%;
    background: ${({ src }) => `url(${src}) center no-repeat;`};
  }
`;

export const MailBtn = styled.div`
  position: fixed;
  bottom: 5%;
  left: 80%;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--yellow, #ffb930);
  border-radius: 50px;

  z-index: 8;

  cursor: pointer;

  span {
    color: #fff;
    font-size: 30px;
  }
`;
