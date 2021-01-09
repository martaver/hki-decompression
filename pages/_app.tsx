import Head from 'next/head';
import React from 'react';

import 'public/light/assets/sass/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Helsinki Decompression</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        {/*<link rel="stylesheet" href='assets/css/main.css' />*/}
        <noscript>
          <link rel="stylesheet" href="assets/css/noscript.css" />
        </noscript>
      </Head>
      <Component {...pageProps} />

      {/* Scripts from light */}
      <script src="assets/js/jquery.min.js" />
      <script src="assets/js/jquery.scrollex.min.js" />
      <script src="assets/js/jquery.scrolly.min.js" />
      <script src="assets/js/skel.min.js" />
      <script src="assets/js/util.js" />
      {/*<script src="assets/js/main.js" />*/}
    </>
  );
}

export default MyApp;
