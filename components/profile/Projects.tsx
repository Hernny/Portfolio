import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import { SlideInOut } from '../motion/Reveal';
import { useTranslation } from 'react-i18next';

export function Projects() {
  const { t } = useTranslation('common');
  return (
    <section id="projects" className="section container scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {t('sections.projects')}
      </motion.h2>
      {projects.map((p, i) => {
        const alignRight = i % 2 === 1;
        // Title translation with special handling for "University Tower"
        const rawTitle = p.title;
        let title = rawTitle;
        if (/^University\s+Tower/i.test(rawTitle)) {
          const suffix = rawTitle.replace(/^University\s+Tower\s*—\s*/i, '');
          const suffixTr = suffix ? (t(`projects.items.${i}.titleSuffix`, suffix) as string) : '';
          title = suffixTr ? `University Tower — ${suffixTr}` : 'University Tower';
        } else {
          title = t(`projects.items.${i}.title`, rawTitle) as string;
        }

        const summary = t(`projects.items.${i}.summary`, p.summary) as string;
        const stackMaybe = t(`projects.items.${i}.stack`, { returnObjects: true }) as unknown;
        const stack = Array.isArray(stackMaybe) ? (stackMaybe as string[]) : p.stack;
        return (
          <article key={p.title} className="w-full py-6 md:py-8">
            <SlideInOut index={i} amount={0.25}>
              <div
                className={`w-full md:max-w-3xl ${alignRight ? 'md:ml-auto md:text-right' : 'md:mr-auto'}`}
              >
                <div className="rounded p-4 md:p-6 border shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none">
                  <h3 className="text-xl md:text-2xl font-extrabold leading-tight tracking-tight text-primary">{title}</h3>
                  <p className="opacity-80 mt-3 md:mt-4 text-base md:text-lg">{summary}</p>
                  <div className={`mt-4 md:mt-6 flex flex-wrap gap-2 text-xs opacity-80 ${alignRight ? 'md:justify-end' : ''}`}>
                    {stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 rounded border shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.links?.length ? (
                    <div className={`mt-5 md:mt-6 flex gap-3 text-sm ${alignRight ? 'md:justify-end' : ''}`}>
                      {p.links.map((l, j) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-primary"
                        >
                          {t(`projects.items.${i}.links.${j}.label`, l.label) as string}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </SlideInOut>
          </article>
        );
      })}
    </section>
  );
}
