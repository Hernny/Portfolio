import { profile } from '../../data/profile';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, SlideInOut } from '../motion/Reveal';
import { useTranslation } from 'react-i18next';

export function Experience() {
  const { t } = useTranslation('common');
  return (
    <section id="experience" className="section container scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {t('sections.experience')}
      </motion.h2>
      {/* Timeline layout: left vertical line + right content cards (fecha integrada arriba de la tarjeta) */}
      <div className="relative">
        {/* Vertical timeline line (centered in the first column) */}
        <div aria-hidden className="pointer-events-none absolute left-[10px] top-0 bottom-0 w-px bg-slate-300 dark:bg-white/10" />

          <motion.div
            className="grid grid-cols-[20px,1fr] items-start gap-x-3 md:gap-x-4 gap-y-6 md:gap-y-8"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
          {profile.experience.map((e, idx) => (
            <Fragment key={`row-${e.role}-${e.company}`}>
                {/* 1) Dot */}
                <motion.div
                  className="relative flex items-center justify-center pt-1"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: 0.04 * (idx % 4) }}
              >
                <span className="block w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 shadow" />
              </motion.div>

                {/* 2) Contenedor de fecha (fuera de la tarjeta) + tarjeta, con efecto de repliegue */}
                <SlideInOut
                  className="space-y-1.5"
                  index={idx}
                  amount={0.35}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.02 * (idx % 4) }}
                >
                  {/* Fecha estilo título reducido y primary, fuera del recuadro */}
                  <motion.div
                    className="text-primary font-extrabold leading-tight tracking-tight text-sm md:text-base"
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.35, ease: 'easeOut', delay: 0.06 + 0.02 * (idx % 4) }}
                  >
                    {t(`experience.items.${idx}.period`, e.period)}
                  </motion.div>
                  <motion.article
                    className="rounded p-4 md:p-5 border shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none"
                    variants={fadeUp}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 16 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: 0.02 * (idx % 4) }}
                  >
                    <h3 className="font-semibold">{t(`experience.items.${idx}.role`, e.role)} — {t(`experience.items.${idx}.company`, e.company)}</h3>
                    {e.location ? (
                      <p className="text-sm opacity-80">{t(`experience.items.${idx}.location`, e.location)}</p>
                    ) : null}
                    <ul className="list-disc list-inside mt-2 md:mt-3 opacity-90">
                      {(
                        Array.isArray(
                          (t(`experience.items.${idx}.highlights`, { returnObjects: true }) as unknown)
                        )
                          ? (t(`experience.items.${idx}.highlights`, { returnObjects: true }) as string[])
                          : e.highlights
                      ).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </motion.article>
                </SlideInOut>
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
