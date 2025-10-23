import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="section container">
      <div className="grid gap-10 md:grid-cols-12 md:items-center">
        {/* Contenido centrado y a todo lo ancho (sin imagen) */}
        <motion.div
          className="md:col-span-12 max-w-3xl mx-auto text-center"
        >
          {/* Headline auténtico */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 1, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            Dirección de Proyectos Fintech enfocada en resultados
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 md:mt-10 text-lg md:text-2xl font-medium opacity-95"
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          >
            Technical Project Manager con 12+ años transformando ideas complejas en plataformas escalables. Combino experiencia hands-on en desarrollo con liderazgo ágil para entregar productos que realmente funcionan.
          </motion.p>

          

          {/* Credenciales */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base opacity-90"
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.08 }}
          >
            {['Computer Science Degree','Scrum Master','Full-Stack Engineer','Blockchain Specialist'].map((c) => (
              <span key={c} className="bg-white/10 px-3 py-1.5 rounded-full border border-white/10">{c}</span>
            ))}
          </motion.div>

          {/* Métricas reales */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-10"
          >
            {[
              {n:'12+', l:'Años Desarrollo & PM'},
              {n:'4', l:'Plataformas Fintech'},
              {n:'5', l:'Países Experiencia'},
              {n:'15+', l:'Tecnologías Stack'},
            ].map((m, i) => (
              <motion.div
                key={m.l}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 text-center"
                initial={{ opacity: 1, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: 0.06 + i * 0.05 }}
              >
                <span className="block text-3xl md:text-4xl font-bold text-primary">{m.n}</span>
                <span className="block text-xs md:text-sm opacity-80 mt-1">{m.l}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stack Tecnológico Destacado (desktop) */}
          <motion.div
            className="mt-8 md:mt-10 bg-white/5 rounded-xl p-5 border border-white/10 hidden md:block"
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.12 }}
          >
            <h3 className="text-sm font-semibold text-sky-300 mb-3">Stack Tecnológico</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-2"><span className="text-sky-200 font-medium min-w-[90px]">Backend:</span><span className="opacity-90">Laravel • Java • Python • C#</span></div>
              <div className="flex items-start gap-2"><span className="text-sky-200 font-medium min-w-[90px]">Frontend:</span><span className="opacity-90">Vue.js • Next.js • TypeScript</span></div>
              <div className="flex items-start gap-2"><span className="text-sky-200 font-medium min-w-[90px]">Database:</span><span className="opacity-90">PostgreSQL • MySQL • MongoDB</span></div>
              <div className="flex items-start gap-2"><span className="text-sky-200 font-medium min-w-[90px]">DevOps:</span><span className="opacity-90">Docker • AWS • Terraform</span></div>
            </div>
          </motion.div>

          {/* Especialización */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.14 }}
          >
            <h3 className="text-sm font-semibold text-sky-300 mb-3">Especialización</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Fintech','Blockchain','Plataformas de Pago','E-commerce','Sistemas Empresariales'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-sky-400 to-sky-500">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Proyectos Destacados (desktop) */}
          <motion.div
            className="mt-8 hidden md:block"
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.16 }}
          >
            <h3 className="text-sm font-semibold text-sky-300 mb-3">Proyectos Destacados</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['YDPAY Platform','Satstreet Exchange','VisaNet Integration','University Tower System'].map(p => (
                <span key={p} className="px-3 py-1.5 rounded bg-white/10 border border-sky-300/30 text-sm">{p}</span>
              ))}
            </div>
          </motion.div>

          {/* Value Proposition (movida justo encima de los CTAs) */}
          <motion.p
            className="mt-10 text-base md:text-lg opacity-95 bg-white/5 border-l-4 border-sky-300/70 rounded px-4 py-3"
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.18 }}
          >
            No solo gestiono proyectos, los construyo. Mi experiencia técnica me permite anticipar problemas, optimizar arquitecturas y liderar equipos con credibilidad desde el código.
          </motion.p>

          {/* CTAs auténticos */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.a
              href="#contact"
              className="inline-block text-lg font-semibold px-8 py-4 rounded-lg text-white shadow [background-image:linear-gradient(135deg,#38BDF8_0%,#6366F1_100%)] hover:shadow-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/40"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Conversemos sobre tu Proyecto Técnico
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-block text-base font-medium px-6 py-3 rounded-lg border border-white/30 hover:border-white/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/30"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Portfolio de Plataformas
            </motion.a>
          </motion.div>

          {/* Experiencia Internacional */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm"
            initial={{ opacity: 1, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.22 }}
          >
            <span className="font-semibold opacity-80">Experiencia Internacional:</span>
            {['🇲🇽 México','🇬🇹 Guatemala','🇬🇧 Inglaterra','🇨🇦 Canadá', '🇦🇷 Argentina'].map(c => (
              <span key={c} className="bg-white/10 px-3 py-1 rounded-full border border-white/10">{c}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
