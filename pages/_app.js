import Head from 'next/head';
import '../css/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <script type="text/javascript" src="/static/script.js"></script>
      <Component {...pageProps} />
    </>
  );
}
