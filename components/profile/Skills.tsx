import { profile } from '../../data/profile';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../motion/Reveal';

export function Skills() {
  const { skills } = profile;
  return (
    <section id="skills" className="section container scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        Habilidades
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Object.entries(skills).map(([cat, items]) => (
          <motion.div key={cat} className="rounded p-4 md:p-5 border shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none" variants={fadeUp}>
            <h3 className="font-semibold mb-2 md:mb-3 capitalize">{cat}</h3>
            <ul className="list-disc list-inside opacity-90">
              {items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
