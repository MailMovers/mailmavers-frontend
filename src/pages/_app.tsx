import Head from 'next/head';
import Layout from '@/components/common/Layout';
import GlobalStyle from '@/styles/globalStyles';

import type { AppProps } from 'next/app';
import type { PageProps } from '@/type/common';

import { RecoilRoot } from 'recoil';

import 'react-quill/dist/quill.snow.css';
import '../styles/quillstyle.css';

export default function App({ Component, pageProps }: AppProps) {
  const pagePropsInfo: PageProps = pageProps;
  const title = pagePropsInfo.title
    ? pagePropsInfo.title + ''
    : 'mailtree: 전자 메일 서비스';

  const description =
    (pagePropsInfo.ogDescription ? pagePropsInfo.ogDescription + ' | ' : '') +
    '보다 쉽고 간편하게 메일을 전달해보아요';

  const keywords = pagePropsInfo.keywords ? pagePropsInfo.keywords + ',' : '';

  const img = pagePropsInfo.ogImage
    ? pagePropsInfo.ogImage
    : '/images/main_img.svg';
  const ogImageAlt = pagePropsInfo.ogImageAlt ?? 'mailtree og 이미지';

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta
          name='robots'
          content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
        />
        <link rel='icon' href={`/images/favicon.ico`} />
        <meta name='keywords' content={keywords} />
        <meta property='og:site_name' content='메일트리' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={img} />
        <meta property='og:image:alt' content={ogImageAlt} />
        <meta httpEquiv='cache' content='no-cache' />
        <title>{title}</title>
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}
