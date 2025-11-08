import { profile } from '../../data/profile';
import { motion } from 'framer-motion';
import { SlideInOut } from '../motion/Reveal';
import { useTranslation } from 'react-i18next';

export function Skills() {
  const { t } = useTranslation('common');
  const { skills } = profile;
  const gradients = [
    'bg-gradient-to-br from-sky-400 to-sky-600 dark:from-sky-500 dark:to-sky-700',
    'bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700',
    'bg-gradient-to-br from-cyan-400 to-cyan-600 dark:from-cyan-500 dark:to-cyan-700',
    'bg-gradient-to-br from-indigo-400 to-indigo-600 dark:from-indigo-500 dark:to-indigo-700',
    'bg-gradient-to-br from-sky-500 to-blue-700 dark:from-sky-600 dark:to-blue-800',
    'bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700',
  ];
  return (
    <section id="skills" className="section container scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {t('sections.skills')}
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {Object.entries(skills).map(([cat, _items], i) => {
          const id = cat.toLowerCase();
          const label = t(`skills.categories.${id}`, id);
          const items = (t(`skills.items.${id}`, { returnObjects: true }) as string[]) || [];
          const flipRotate = i % 2 === 0 ? '180deg' : '-180deg';
          const backRotate = flipRotate;
          const frontBg = gradients[i % gradients.length];
          return (
            <SlideInOut key={cat} index={i} amount={0.25}>
              <div
                className="group flip"
                tabIndex={0}
                role="button"
                aria-label={t('skills.showCategory', { cat: label })}
                style={{ ['--flip-rotate' as any]: flipRotate, ['--back-rotate' as any]: backRotate } as React.CSSProperties}
              >
                <div className="flip-inner min-h-[200px] md:min-h-[220px]">
                  {/* Frente: solo título centrado, pantones azulados */}
                  <div className="flip-face absolute inset-0 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm">
                    <div className={`h-full w-full grid place-items-center ${frontBg} text-white`}>
                      <h3 className="font-extrabold text-center capitalize tracking-tight text-lg md:text-xl drop-shadow-sm">
                        {label}
                      </h3>
                    </div>
                  </div>
                  {/* Reverso: contenido en tono neutro */}
                  <div className="flip-face flip-back absolute inset-0 rounded-xl overflow-hidden">
                    <div className="h-full w-full rounded-xl p-4 md:p-5 border shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none">
                      <h3 className="font-semibold mb-2 md:mb-3 capitalize">{label}</h3>
                      <ul className="list-disc list-inside opacity-90">
                        {items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInOut>
          );
        })}
      </div>
    </section>
  );
}
