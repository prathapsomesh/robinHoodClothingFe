import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import NavbarTop from '@/components/navbar';
import Bottom from '@/components/Bottom';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarTop />
      <Component {...pageProps} />
      <Bottom />
    </>
  );
}
