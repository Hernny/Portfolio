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
        <p className="mt-3 text-xl font-semibold">
          El Project Manager que convierte caos técnico en sistemas que escalan
        </p>
        <div className="mt-4 space-y-3 text-lg opacity-90">
          <p>
            <span className="font-semibold">Mi historia: </span>
            Comencé desarrollando sistemas de rastreo por GSM en Venezuela. Hoy coordino equipos internacionales que construyen el futuro del dinero digital.
          </p>
          <p>
            <span className="font-semibold">Tu historia: </span>
            Tienes una visión fintech ambiciosa pero necesitas alguien que traduzca esa visión en código que funciona, equipos que entregan, y productos que los usuarios adoptan.
          </p>
          <p>
            <span className="font-semibold">Nuestra historia: </span>
            Construyamos juntos la próxima plataforma financiera que cambie las reglas del juego.
          </p>
        </div>
        {/* Badges removed per request */}
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-6 py-3 rounded bg-primary text-black font-semibold hover:bg-sky-500">Ver Proyectos</a>
          <a href="#contact" className="px-6 py-3 rounded border border-white/20 hover:border-white/40">Contacto</a>
        </div>
      </motion.div>
      <motion.div
        className="relative flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Glow background */}
        <div className="pointer-events-none absolute -top-6 md:-top-10 h-64 w-64 md:h-80 md:w-80 bg-gradient-to-tr from-primary/30 to-white/10 rounded-full blur-3xl" />
        {/* Demo image */}
        <img
          src="/hero-demo.svg"
          alt="Retrato / imagen de demostración"
          className="relative z-10 h-56 w-56 md:h-72 md:w-72 rounded-2xl ring-1 ring-white/10 shadow-xl object-cover bg-black/10"
          loading="eager"
          decoding="async"
        />
      </motion.div>
      <div className="col-span-2 flex justify-center mt-6 text-primary animate-bounce">
        <FaArrowDown />
      </div>
    </section>
  );
}
