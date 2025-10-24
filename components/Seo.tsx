import Head from 'next/head';
import { site } from '../data/site';

type Props = {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonicalPath?: string; // optional path to build canonical URL from site.baseUrl
};

export function Seo({ title, description, keywords, canonicalPath }: Props) {
  const t = title || site.title;
  const d = description || site.description;
  const kw = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const canonical = site.baseUrl && (canonicalPath ? `${site.baseUrl}${canonicalPath}` : site.baseUrl);
  return (
    <Head>
      <title>{t}</title>
      <meta name="description" content={d} />
      {kw ? <meta name="keywords" content={kw} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || site.baseUrl || ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
    </Head>
  );
}
