import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

/// wrapping component with our layout from Layout.tsx
/// in between is the children from Layout.tsx
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
