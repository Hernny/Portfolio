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
        className="text-base md:text-lg opacity-90 text-center"
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
          <motion.p key={i} className="opacity-90" variants={fadeUp}>{s}</motion.p>
        ))}
      </motion.div>

      {/* CTA de contacto, homogenizada con el Hero */}
      <motion.div
        className="mt-6 md:mt-8 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
      >
        <motion.a
          href="#contact"
          className="inline-block text-lg font-semibold px-8 py-4 rounded-lg text-white shadow bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-300/50"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Impulsemos tu plataforma
        </motion.a>
      </motion.div>
    </section>
  );
}
