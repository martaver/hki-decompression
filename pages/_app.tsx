import Head from 'next/head';
import React from 'react';

import 'public/light/assets/sass/main.scss';
import { repoName } from 'prismic-configuration';

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
        <noscript>
          <link rel="stylesheet" href="assets/css/noscript.css" />
        </noscript>
      </Head>
      <Component {...pageProps} />

      {/* Google maps */}
      <script
        type="text/javascript"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_TOKEN}`}
      />

      {/* Scripts from light */}
      <script src="light/assets/js/jquery.min.js" />
      <script src="light/assets/js/jquery.scrollex.min.js" />
      <script src="light/assets/js/jquery.scrolly.min.js" />
      <script src="light/assets/js/skel.min.js" />
      <script src="light/assets/js/util.js" />
      <script
        async
        defer
        src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}
      />
    </>
  );
}

export default MyApp;
