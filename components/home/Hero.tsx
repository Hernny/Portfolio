import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="section container">
      {/* Máximo 2 pantallas: dividimos el hero en dos paneles verticales */}
      <div className="md:col-span-12 max-w-4xl mx-auto text-center">
        {/* Panel 1: título, resumen, credenciales y métricas */}
        <motion.div className="min-h-[100svh] flex flex-col items-center justify-center py-10">
          {/* Headline auténtico */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Dirección de Proyectos Fintech enfocada en{' '}
            <span className="text-primary">resultados</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 md:mt-8 text-lg md:text-2xl font-medium opacity-95"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.85 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          >
            Technical Project Manager con 12+ años transformando ideas complejas en plataformas escalables. Combino experiencia hands-on en desarrollo con liderazgo ágil para entregar productos que realmente funcionan.
          </motion.p>

          {/* Credenciales */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base opacity-90"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
          >
            {['Computer Science Degree','Scrum Master','Full-Stack Engineer','Blockchain Specialist'].map((c) => (
              <span key={c} className="bg-white/10 px-3 py-1.5 rounded-full border border-white/10">{c}</span>
            ))}
          </motion.div>

          {/* Métricas reales */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-10">
            {[
              { n: '12+', l: 'Años Desarrollo & PM' },
              { n: '4', l: 'Plataformas Fintech' },
              { n: '5', l: 'Países Experiencia' },
              { n: '15+', l: 'Tecnologías Stack' },
            ].map((m, i) => (
              <motion.div
                key={m.l}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 text-center"
                initial={{ opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.06 + i * 0.06 }}
              >
                <span className="block text-3xl md:text-4xl font-bold text-primary">{m.n}</span>
                <span className="block text-xs md:text-sm opacity-80 mt-1">{m.l}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Panel 2: stack, especialización, proyectos, propuesta de valor, CTAs y experiencia */}
        <motion.div className="min-h-[100svh] flex flex-col items-center justify-center py-10">
          {/* Stack Tecnológico */}
          <motion.div
            className="w-full mt-2 md:mt-0 bg-white/5 rounded-xl p-5 border border-white/10"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
          >
            <h3 className="text-sm font-semibold text-sky-300 mb-4">Stack Tecnológico</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Backend pills */}
              <div className="text-center">
                <h4 className="text-sm font-semibold opacity-90">Backend</h4>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <a href="https://docs.nestjs.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">NestJS</a>
                  <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">Express</a>
                  <a href="https://laravel.com/docs" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">Laravel</a>
                  <a href="https://www.anchor-lang.com/docs" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">Anchor</a>
                </div>
              </div>
              {/* Frontend pills */}
              <div className="text-center">
                <h4 className="text-sm font-semibold opacity-90">Frontend</h4>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <a href="https://vuejs.org/guide/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">Vue</a>
                  <a href="https://react.dev/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">React</a>
                  <a href="https://developer.android.com" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">Android</a>
                </div>
              </div>
              {/* Database pills */}
              <div className="text-center">
                <h4 className="text-sm font-semibold opacity-90">Database</h4>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <a href="https://www.postgresql.org/docs/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">Postgres</a>
                  <a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">MySQL</a>
                  <a href="https://www.mongodb.com/docs/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">MongoDB</a>
                  <a href="https://redis.io/docs/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">Redis</a>
                </div>
              </div>
              {/* DevOps pills */}
              <div className="text-center">
                <h4 className="text-sm font-semibold opacity-90">DevOps</h4>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <a href="https://docs.docker.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">Docker</a>
                  <a href="https://nx.dev/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">Nx</a>
                  <a href="https://docs.github.com/actions" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">CI/CD</a>
                  <a href="https://docs.aws.amazon.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/10 border border-white/10 hover:border-white/20 hover:bg-white/15">AWS</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Especialización */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.14 }}
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
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.16 }}
          >
            <h3 className="text-sm font-semibold text-sky-300 mb-3">Proyectos Destacados</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['YDPAY Platform','Satstreet Exchange','VisaNet Integration','University Tower System'].map(p => (
                <span key={p} className="px-3 py-1.5 rounded bg-white/10 border border-sky-300/30 text-sm">{p}</span>
              ))}
            </div>
          </motion.div>

          {/* Value Proposition (movida justo encima de los CTAs) */}
          <motion.blockquote
            className="mt-10 text-base md:text-lg opacity-95 border border-white/15 bg-white/5 rounded-xl px-5 py-4 italic"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.18 }}
          >
            “No solo gestiono proyectos, los construyo. Mi experiencia técnica me permite anticipar problemas, optimizar arquitecturas y liderar equipos con credibilidad desde el código.”
          </motion.blockquote>

          {/* CTAs auténticos */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.a
              href="#contact"
              className="inline-block text-lg font-semibold px-8 py-4 rounded-lg text-white shadow bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-300/50"
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
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.22 }}
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
