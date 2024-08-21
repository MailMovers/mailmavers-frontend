import { Fonts } from '@/common/constant';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { Common } from './common';

const baseStyle = css`
  ${emotionNormalize};

  html,
  body {
    /* TODO : 기본 데스크 사이즈 - 반응형일 경우 생각해야함 */
    /* width: 100vw; */
    height: 100vh;
    min-height: 100%;
    border: 5px solid black;

    /* 기본 데스크 사이즈 */
    @media (max-width: 450px) {
      /* font-size: 12px; */
    }
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    color: ${Common.colors.black};
    /* font: inherit; */
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', Sans-serif;
    /* font-family 피그마에 따라 폰트 설정 필요할 수도 있음.  */
    /* font-family: ${Fonts.AcRegular}; */
  }

  button {
    outline: none;
    border: 0;
    cursor: pointer;
  }
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
