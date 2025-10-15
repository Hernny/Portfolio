import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export function Hero() {
  const router = useRouter();
  return (
    <section id="home" className="section container">
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        {/* Contenido centrado */}
        <motion.div
          className="order-1 md:order-none md:col-span-8 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Headline orientado a resultados */}
          <motion.h1
            className="hero-headline text-5xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Transformo Proyectos Fintech en Sistemas que Generan $10M+ ROI
          </motion.h1>

          {/* Value proposition específica */}
          <motion.p
            className="hero-subheadline mt-5 text-xl md:text-2xl font-medium opacity-95"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Especializado en transformaciones digitales que reducen costos operacionales 35% mientras aceleran el time-to-market en fintech y e-commerce
          </motion.p>

          {/* Credenciales visibles */}
          <motion.div
            className="mt-8 text-sm md:text-base opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <span className="px-2">PMP® Certified</span>
            <span className="opacity-50">|</span>
            <span className="px-2">Agile Coach</span>
            <span className="opacity-50">|</span>
            <span className="px-2">Fintech Expert</span>
          </motion.div>

          {/* Métricas de impacto */}
          <motion.div
            className="metrics-container grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="metric-card rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <span className="metric-number block text-3xl md:text-4xl font-bold text-primary">98%</span>
              <span className="metric-label block text-xs md:text-sm opacity-80 mt-1">Proyectos a tiempo</span>
            </div>
            <div className="metric-card rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <span className="metric-number block text-3xl md:text-4xl font-bold text-primary">$50M+</span>
              <span className="metric-label block text-xs md:text-sm opacity-80 mt-1">En proyectos gestionados</span>
            </div>
            <div className="metric-card rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <span className="metric-number block text-3xl md:text-4xl font-bold text-primary">35%</span>
              <span className="metric-label block text-xs md:text-sm opacity-80 mt-1">Reducción de costos</span>
            </div>
          </motion.div>

          {/* CTAs prominentes */}
          <motion.div
            className="cta-container mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <motion.a
              href="#contact"
              className="cta-primary inline-block text-lg font-semibold px-8 py-4 rounded-lg text-white shadow [background-image:linear-gradient(135deg,#38BDF8_0%,#6366F1_100%)] hover:shadow-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/40"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Agenda Consulta Estratégica Gratuita
            </motion.a>
            <motion.a
              href="#projects"
              className="cta-secondary inline-block text-base font-medium px-6 py-3 rounded-lg border border-white/30 hover:border-white/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/30"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Portfolio de Proyectos
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Foto (30% aprox del espacio en desktop) */}
        <motion.div
          className="order-2 md:order-none md:col-span-4 relative flex justify-center mt-4 md:mt-0"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="pointer-events-none absolute -top-6 md:-top-8 h-56 w-56 md:h-64 md:w-64 bg-gradient-to-tr from-primary/20 to-white/10 rounded-full blur-3xl" />
          <motion.img
            src={`${router.basePath}/hernny.jpg`}
            alt="Foto de Hernny Malaver — Project Manager Fintech"
            className="relative z-10 h-52 w-52 md:h-64 md:w-64 rounded-2xl ring-1 ring-white/10 shadow-xl object-cover bg-black/10"
            loading="eager"
            decoding="async"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
