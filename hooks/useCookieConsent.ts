import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export type Consent = 'granted' | 'denied' | 'unset';

const COOKIE_KEY = 'cookie-consent';

export function useCookieConsent() {
  const [consent, setConsent] = useState<Consent>('unset');

  useEffect(() => {
    const value = Cookies.get(COOKIE_KEY) as Consent | undefined;
    if (value) setConsent(value);
  }, []);

  const accept = () => {
    Cookies.set(COOKIE_KEY, 'granted', { expires: 180 });
    setConsent('granted');
  };

  const reject = () => {
    Cookies.set(COOKIE_KEY, 'denied', { expires: 180 });
    setConsent('denied');
  };

  return { consent, accept, reject };
}
