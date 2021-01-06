import Head from 'next/head';
import React from 'react';

import 'light/assets/sass/main.scss';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Helsinki Decompression</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      {/*<link rel="stylesheet" href='assets/css/main.css' />*/}
      <noscript><link rel="stylesheet" href='assets/css/noscript.css' /></noscript>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
