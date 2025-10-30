import { motion } from 'framer-motion';

export function Hero() {
  return (
    // Hero con márgenes homogéneos y reglas responsive (sm/md) y fondo diferenciado full-bleed
  <section id="home" className="section relative overflow-hidden w-full bg-slate-100 dark:bg-slate-900">
      {/* Lavado muy sutil: gradiente vertical para profundidad (light/dark aware) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/5 via-transparent to-transparent dark:from-black/20 dark:via-transparent dark:to-transparent"
      />
      {/* Textura ligera tipo papel: ruido fractal de baja opacidad */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-10 dark:opacity-10 mix-blend-multiply bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22><filter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.8%22/></svg>')]"
      />
      {/* Máximo 2 pantallas (sin sub-scroll): dos paneles que usan el scroll de la página */}
      <div className="container md:col-span-12 w-full mx-auto text-center">
        {/* Contenido unificado del hero */}
        <motion.div className="flex flex-col items-center justify-start">
          {/* Headline auténtico */}
          <motion.h1
            className="mt-8 md:mt-12 text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Dirección y desarrollo de plataformas Fintech, desde la conceptualización hasta la puesta en{' '}
            <span className="text-primary">producción</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-8 md:mt-12 text-lg md:text-2xl font-medium opacity-95"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.85 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          >
            Experiencia comprobada en integración de tecnologías, automatización de procesos y liderazgo de equipos multidisciplinarios en entornos ágiles.
            Oriento cada proyecto hacia la escalabilidad, la seguridad y la entrega de valor tangible para el negocio.
          </motion.p>

          {/* CTAs auténticos (movidos arriba para primera pantalla) */}
          <motion.div
            className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
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

          {/* Credenciales (ahora arriba de las métricas) */}
          <motion.div
            className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base opacity-90"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          >
            {['Computer Science Degree','Scrum Master','Full-Stack Engineer','Blockchain Specialist'].map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-lg border shadow-sm bg-white border-slate-200 dark:bg-white/10 dark:border-white/10 dark:shadow-none"
              >
                {c}
              </span>
            ))}
          </motion.div>

          {/* Métricas reales */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12">
            {[
              { n: '12+', l: 'Años Desarrollo & PM' },
              { n: '4', l: 'Plataformas Fintech' },
              { n: '5', l: 'Países Experiencia' },
              { n: '15+', l: 'Tecnologías Stack' },
            ].map((m, i) => (
              <motion.div
                key={m.l}
                className="rounded-xl border p-4 md:p-5 text-center shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none"
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

          {/* Experiencia Internacional (chips sin etiqueta) */}
          <motion.div
            className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-2 text-sm"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
          >
            {['🇲🇽 México','🇬🇹 Guatemala','🇬🇧 Inglaterra','🇨🇦 Canadá', '🇦🇷 Argentina'].map(c => (
              <span key={c} className="px-3 py-1.5 rounded-lg border shadow-sm bg-white border-slate-200 dark:bg-white/10 dark:border-white/10 dark:shadow-none">{c}</span>
            ))}
          </motion.div>
          {/* Stack Tecnológico */}
          <motion.div
            className="w-full mt-8 md:mt-12"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6">Stack Tecnológico</h3>
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
              {/* Backend pills */}
              <div className="text-center">
                <h4 className="text-sm md:text-base font-extrabold leading-tight tracking-tight text-primary">Backend</h4>
                <div className="mt-2 md:mt-3 flex flex-wrap justify-center gap-2">
                  <a href="https://docs.nestjs.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">NestJS</a>
                  <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Express</a>
                  <a href="https://laravel.com/docs" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Laravel</a>
                  <a href="https://www.anchor-lang.com/docs" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Anchor</a>
                </div>
              </div>
              {/* Frontend pills */}
              <div className="text-center">
                <h4 className="text-sm md:text-base font-extrabold leading-tight tracking-tight text-primary">Frontend</h4>
                <div className="mt-2 md:mt-3 flex flex-wrap justify-center gap-2">
                  <a href="https://vuejs.org/guide/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Vue</a>
                  <a href="https://react.dev/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">React</a>
                  <a href="https://developer.android.com" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Android</a>
                </div>
              </div>
              {/* Database pills */}
              <div className="text-center">
                <h4 className="text-sm md:text-base font-extrabold leading-tight tracking-tight text-primary">Database</h4>
                <div className="mt-2 md:mt-3 flex flex-wrap justify-center gap-2">
                  <a href="https://www.postgresql.org/docs/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Postgres</a>
                  <a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">MySQL</a>
                  <a href="https://www.mongodb.com/docs/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">MongoDB</a>
                  <a href="https://redis.io/docs/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Redis</a>
                </div>
              </div>
              {/* DevOps pills */}
              <div className="text-center">
                <h4 className="text-sm md:text-base font-extrabold leading-tight tracking-tight text-primary">DevOps</h4>
                <div className="mt-2 md:mt-3 flex flex-wrap justify-center gap-2">
                  <a href="https://docs.docker.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Docker</a>
                  <a href="https://nx.dev/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Nx</a>
                  <a href="https://docs.github.com/actions" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">CI/CD</a>
                  <a href="https://docs.aws.amazon.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">AWS</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Especialización */}
          <motion.div
            className="mt-8 md:mt-12"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.14 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6">Especialización</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Fintech','Blockchain','Plataformas de Pago','E-commerce','Sistemas Empresariales'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-sky-400 to-sky-500 border border-sky-300/40 shadow-sm dark:border-white/10 dark:shadow-none">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Proyectos Destacados (desktop) */}
          <motion.div
            className="mt-8 md:mt-12 hidden md:block"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.16 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6">Proyectos Destacados</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['YDPay Platform','Satstreet Exchange','Becca Platform','The Futures Platform'].map(p => (
                <span key={p} className="px-3 py-1.5 rounded-lg text-sm border shadow-sm bg-white border-slate-200 dark:bg-white/10 dark:border-white/10 dark:shadow-none">
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.blockquote
            className="mt-8 md:mt-10 text-base md:text-lg opacity-95 border border-white/15 bg-white/5 rounded-xl px-4 md:px-6 py-3 md:py-4 italic"
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.18 }}
          >
            “No solo gestiono proyectos, los construyo. Mi experiencia técnica me permite anticipar problemas, optimizar arquitecturas y liderar equipos con credibilidad desde el código.”
          </motion.blockquote>


        </motion.div> 
      </div>
    </section>
  );
}
