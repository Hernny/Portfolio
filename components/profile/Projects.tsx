import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, SlideInOut } from '../motion/Reveal';

export function Projects() {
  return (
    <section id="projects" className="section container scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        Proyectos
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <SlideInOut key={p.title} index={i} amount={0.25}>
            <article className="rounded p-4 md:p-5 border shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="opacity-80 mt-2 md:mt-3">{p.summary}</p>
            <div className="mt-3 md:mt-4 flex flex-wrap gap-2 text-xs opacity-80">
              {p.stack.map((s) => (
                <span key={s} className="px-2 py-1 rounded border shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none">{s}</span>
              ))}
            </div>
            {p.links?.length ? (
              <div className="mt-4 md:mt-5 flex gap-3 text-sm">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="underline hover:text-primary">
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
            </article>
          </SlideInOut>
        ))}
      </div>
    </section>
  );
}
