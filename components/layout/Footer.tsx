import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className="border-t border-white/10">
      <div className="container py-8 flex flex-col md:flex-row items-center gap-3 text-sm">
        <p className="opacity-70">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        <div className="ml-auto flex items-center gap-6">
          <nav aria-label={t('footer.policiesAria')} className="text-sm">
            <Link href={{ pathname: '/privacy' }} className="opacity-80 hover:text-primary">{t('footer.privacy')}</Link>
          </nav>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/Hernny"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
