import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export function Hero() {
  return (
    <section id="home" className="section container grid md:grid-cols-2 items-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hernny Malaver
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Director de proyectos y desarrollador de software — Next.js, Tailwind, Framer Motion, Google APIs
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#gallery" className="px-6 py-3 rounded bg-primary text-black font-semibold hover:bg-sky-500">Ver Galería</a>
          <a href="#contact" className="px-6 py-3 rounded border border-white/20 hover:border-white/40">Contacto</a>
        </div>
      </motion.div>
      <motion.div
        className="relative flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="h-56 w-56 md:h-72 md:w-72 bg-gradient-to-tr from-primary/30 to-white/10 rounded-full blur-2xl" />
      </motion.div>
      <div className="col-span-2 flex justify-center mt-6 text-primary animate-bounce">
        <FaArrowDown />
      </div>
    </section>
  );
}
