import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import NavbarTop from '@/components/navbar';
import Bottom from '@/components/Bottom';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Robinhood clothing</title>
      </Head>
      <NavbarTop />
      <Component {...pageProps} />
      <Bottom />
    </>
  );
}
