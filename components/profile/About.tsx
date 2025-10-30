import { profile } from '../../data/profile';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../motion/Reveal';

export function About() {
  return (
    <section id="about" className="section container scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        Sobre mí
      </motion.h2>
      <motion.p
        className="opacity-80 text-center"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
      >
        {profile.name} — {profile.title}
      </motion.p>
      <motion.div
        className="mt-4 md:mt-6 grid gap-3 md:gap-4"
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {profile.summary.map((s, i) => (
          <motion.p key={i} className="opacity-80" variants={fadeUp}>{s}</motion.p>
        ))}
      </motion.div>
    </section>
  );
}
