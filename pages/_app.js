import Head from 'next/head';
import '../css/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" href="./assets/icon-180-180.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="./assets/icon-152-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./assets/icon-180-180.png'"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="./assets/icon-167-167.png"
        />

        <meta name="apple-mobile-web-app-title" content="Lorem Ipsum" />

        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      </Head>
      <script type="text/javascript" src="/static/script.js"></script>
      <Component {...pageProps} />
    </>
  );
}
