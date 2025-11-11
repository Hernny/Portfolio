import { profile } from '../../data/profile';
import { FaEnvelope, FaLinkedin, FaPhone, FaWhatsapp, FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, SlideInOut } from '../motion/Reveal';
import { useTranslation } from 'react-i18next';

export function ContactSection() {
  const { t } = useTranslation('common');
  const wa = useMemo(() => {
    const digits = profile.phone.replace(/[^0-9]/g, '');
    const msg = encodeURIComponent('Hola Hernny, me gustaría conversar sobre un proyecto.');
    return `https://wa.me/${digits}?text=${msg}`;
  }, []);

  return (
    <section id="contact" className="section container scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {t('sections.contact')}
        </motion.h2>
        <motion.p className="text-lg opacity-80 leading-relaxed" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}>
          {t('contact.intro')}
        </motion.p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 md:gap-10 items-stretch">
        {/* Contact channels */}
        <SlideInOut className="space-y-3 md:space-y-4 lg:col-span-1 h-full" index={0} amount={0.25}>
          <div className="text-left">
            <h3 className="font-semibold tracking-wide text-primary mb-2">{t('contact.channelsTitle')}</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li>
                <a href={`mailto:${profile.email}`} className="group flex items-center gap-3 rounded-lg border border-slate-200/60 dark:border-white/10 hover:border-primary/60 px-4 py-3 bg-white/40 dark:bg-white/5 backdrop-blur transition">
                  <span className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition">
                    <FaEnvelope />
                  </span>
                  <div className="text-sm text-left">
                    <p className="font-medium">{t('contact.email')}</p>
                    <p className="opacity-70">{profile.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-slate-200/60 dark:border-white/10 hover:border-primary/60 px-4 py-3 bg-white/40 dark:bg-white/5 backdrop-blur transition">
                  <span className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition">
                    <FaLinkedin />
                  </span>
                  <div className="text-sm text-left">
                    <p className="font-medium">{t('contact.linkedin')}</p>
                    <p className="opacity-70 truncate max-w-[180px]">{profile.linkedin.replace('https://', '')}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/tfA8CX3h" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-slate-200/60 dark:border-white/10 hover:border-primary/60 px-4 py-3 bg-white/40 dark:bg-white/5 backdrop-blur transition" aria-label="Discord invite">
                  <span className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition">
                    <FaDiscord />
                  </span>
                  <div className="text-sm text-left">
                    <p className="font-medium">Discord</p>
                    <p className="opacity-70 truncate max-w-[180px]">discord.gg/tfA8CX3h</p>
                  </div>
                </a>
              </li>
              {/* <li>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="group flex items-center gap-3 rounded-lg border border-slate-200/60 dark:border-white/10 hover:border-primary/60 px-4 py-3 bg-white/40 dark:bg-white/5 backdrop-blur transition">
                  <span className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition">
                    <FaPhone />
                  </span>
                  <div className="text-sm text-left">
                    <p className="font-medium">Teléfono</p>
                    <p className="opacity-70">{profile.phone}</p>
                  </div>
                </a>
              </li> */}
              {/* WhatsApp moved to Immediate Contact section */}
            </ul>
          </div>
        </SlideInOut>
        {/* CTA inmediato con tarjetas (WhatsApp + Telegram) */}
        <SlideInOut className="lg:col-span-2 h-full" index={1} amount={0.25}>
          <div className="h-full flex flex-col gap-4 md:gap-5 bg-white/50 dark:bg-white/5 backdrop-blur rounded-xl p-5 md:p-6 border border-slate-200/70 dark:border-white/10 shadow-md">
            <div className="space-y-2">
              <h3 className="font-semibold tracking-wide text-primary">{t('contact.immediate')}</h3>
              <p className="opacity-80">{t('contact.immediateText')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={wa} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-green-200/60 dark:border-green-500/20 hover:border-green-500/70 px-4 py-3 bg-green-50/70 dark:bg-green-500/10 backdrop-blur transition">
                <span className="p-2 rounded-md bg-green-500/15 text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white transition">
                  <FaWhatsapp />
                </span>
                <div className="text-sm text-left">
                  <p className="font-medium">{t('contact.whatsapp')}</p>
                  <p className="opacity-70">{t('contact.whatsappHint')}</p>
                </div>
              </a>
              <a href="https://t.me/HernnyMalaver" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-sky-200/70 dark:border-sky-500/20 hover:border-sky-500/70 px-4 py-3 bg-sky-50/70 dark:bg-sky-500/10 backdrop-blur transition">
                <span className="p-2 rounded-md bg-sky-500/15 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition">
                  <FaTelegramPlane />
                </span>
                <div className="text-sm text-left">
                  <p className="font-medium">Telegram</p>
                  <p className="opacity-70">{t('contact.whatsappHint')}</p>
                </div>
              </a>
            </div>
            <p className="text-xs opacity-60 leading-relaxed mt-auto">{t('contact.legal')}</p>
          </div>
        </SlideInOut>
        <motion.figure
          className="col-span-1 lg:col-span-3"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <blockquote className="relative pl-5 md:pl-6 text-base md:text-lg italic leading-relaxed">
          <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 rounded bg-amber-500/80 dark:bg-amber-400/70" />
          {t('contact.footerQuote')}
        </blockquote>
        <figcaption className="mt-2 md:mt-3 text-sm opacity-75">
          {t('contact.footerQuoteSource')}
        </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
