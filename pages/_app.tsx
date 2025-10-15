import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${router.basePath}/favicon.svg`} />
        <link rel="manifest" href={`${router.basePath}/site.webmanifest`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
