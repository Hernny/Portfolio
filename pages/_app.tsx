import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hernny Malaver — Director de proyectos y desarrollador de software</title>
  <meta name="description" content="Portafolio de Hernny Malaver: dirección de proyectos y desarrollo de software con Next.js, Tailwind, Framer Motion y Google APIs." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
