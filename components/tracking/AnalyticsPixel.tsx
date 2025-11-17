import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export function AnalyticsPixel() {
  const { consent } = useCookieConsent();
  const router = useRouter();

  // Allow override from env; fallback to the provided ID if env is not set
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-RSVNH1T50D';
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  // pageview helper for SPA route changes
  // Always register the hook in the same order — guard inside the effect by consent
  useEffect(() => {
    if (consent !== 'granted') return;
    if (!GA_ID) return;

    const handleRouteChange = (url: string) => {
      try {
        // prefer gtag if available, otherwise push to dataLayer
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('config', GA_ID, { page_path: url });
        } else if (Array.isArray((window as any).dataLayer)) {
          (window as any).dataLayer.push({ event: 'page_view', page_path: url });
        }
      } catch (err) {
        // swallow errors to avoid breaking navigation
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [consent, GA_ID, router.events]);

  // Only render analytics scripts when consent is granted
  if (consent !== 'granted') return null;

  return (
    <>
      {/* Google Analytics (gtag.js) */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { page_path: window.location.pathname });`,
            }}
          />
        </>
      )}

      {/* Meta Pixel (Facebook) — keep existing behavior if configured */}
      {META_PIXEL_ID ? (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '${META_PIXEL_ID}'); fbq('track', 'PageView');`,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}
    </>
  );
}
