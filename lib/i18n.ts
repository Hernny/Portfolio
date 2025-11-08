import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import resources statically so they work with static export
import es from '../locales/es/common.json';
import en from '../locales/en/common.json';
import it from '../locales/it/common.json';

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        es: { common: es },
        en: { common: en },
        it: { common: it },
      },
      lng: 'es',
      fallbackLng: 'es',
      defaultNS: 'common',
      ns: ['common'],
      interpolation: { escapeValue: false },
      returnNull: false,
    });

  if (typeof window !== 'undefined') {
    i18n.on('languageChanged', (lng: string) => {
      try {
        window.localStorage.setItem('lang', lng);
      } catch {}
      document.documentElement.lang = lng;
    });
    document.documentElement.lang = i18n.language;
  }
}

export default i18n;
