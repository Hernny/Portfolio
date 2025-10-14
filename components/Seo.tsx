import Head from 'next/head';
import { site } from '../data/site';

type Props = {
  title?: string;
  description?: string;
};

export function Seo({ title, description }: Props) {
  const t = title || site.title;
  const d = description || site.description;
  return (
    <Head>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.baseUrl || ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
    </Head>
  );
}
