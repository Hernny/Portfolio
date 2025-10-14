import Head from 'next/head';
import { Seo } from './Seo';
import { ReactNode, useEffect } from 'react';
import { CookieBanner } from './cookie/CookieBanner';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { AnalyticsPixel } from './tracking/AnalyticsPixel';

export function Layout({ children, title = 'Hernny Malaver — Director de proyectos y desarrollador de software' }: { children: ReactNode; title?: string }) {
  useEffect(() => {
    // Smooth scroll for SPA anchors
    const onClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.matches('a[href^="#"]')) {
        const el = document.querySelector(target.getAttribute('href')!);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Seo title={title} />
      <AnalyticsPixel />
  <Header />
  <div className="h-16" aria-hidden />
  <main>{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
