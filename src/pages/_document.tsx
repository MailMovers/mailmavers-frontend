// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';

export default class MyDocument extends Document {
  render() {
    const emotionCache = createEmotionCache();

    return (
      <Html lang='ko'>
        <Head>
          {/* Inject emotion styles */}
          <meta name="emotion-cache" content={emotionCache.key} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
          {/* Other head elements */}
        </Head>
        <body>
          <CacheProvider value={emotionCache}>
            <Main />
            <NextScript />
          </CacheProvider>
        </body>
      </Html>
    );
  }
}