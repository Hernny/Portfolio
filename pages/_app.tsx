import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css';
import i18n from '../lib/i18n';

function LanguageHydrator() {
  useEffect(() => {
    const allowed = ['es', 'en', 'it'];
    let target: string | undefined;
    try {
      const saved = window.localStorage.getItem('lang') || '';
      if (allowed.includes(saved)) target = saved;
    } catch {}
    if (!target && typeof navigator !== 'undefined') {
      const nav = (navigator.language || '').slice(0, 2).toLowerCase();
      if (allowed.includes(nav)) target = nav;
    }
    if (target && target !== i18n.language) {
      i18n.changeLanguage(target);
      document.documentElement.lang = target;
    }
  }, []);
  return null;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${router.basePath}/favicon.svg`} />
        <link rel="manifest" href={`${router.basePath}/site.webmanifest`} />
      </Head>
      <LanguageHydrator />
      <Component {...pageProps} />
    </>
  );
}
