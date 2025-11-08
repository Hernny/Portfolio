import { profile } from '../../data/profile';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, SlideInOut } from '../motion/Reveal';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation('common');
  return (
    <section id="about" className="section container scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {t('sections.about')}
      </motion.h2>
      <motion.p
        className="text-base md:text-lg opacity-90 text-center"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
      >
        {profile.name} — {profile.title}
      </motion.p>
      <div className="mt-4 md:mt-6 grid gap-3 md:gap-4">
        {profile.summary.map((s, i) => (
          <SlideInOut key={i} index={i} amount={0.4}>
            <p className="opacity-90">{s}</p>
          </SlideInOut>
        ))}
      </div>

      {/* CTA de contacto, homogenizada con el Hero */}
      <div className="mt-6 md:mt-8 flex justify-center">
        <SlideInOut index={profile.summary.length} amount={0.6}>
          <a
            href="#contact"
            className="inline-block text-lg font-semibold px-8 py-4 rounded-lg text-white shadow bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-300/50"
          >
            {t('about.cta')}
          </a>
        </SlideInOut>
      </div>
    </section>
  );
}
