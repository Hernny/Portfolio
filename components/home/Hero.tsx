import { motion } from 'framer-motion';
import { SlideInOut } from '../motion/Reveal';
import { useTranslation, Trans } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation('common');
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
            <Trans i18nKey="hero.title" components={{ 0: <span className="text-primary" /> }} />
          </motion.h1>

          {/* Subheadline con repliegue lateral */}
          <SlideInOut direction="right" amount={0.85}>
            <p className="mt-8 md:mt-12 text-lg md:text-2xl font-medium opacity-95">
              {t('hero.sub')}
            </p>
          </SlideInOut>

          {/* CTAs auténticos (movidos arriba para primera pantalla) */}
          <SlideInOut index={0} amount={0.7}>
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a
                href="#contact"
                className="inline-block text-lg font-semibold px-8 py-4 rounded-lg text-white shadow bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-300/50"
              >
                {t('hero.ctaPrimary')}
              </a>
              <a
                href="#projects"
                className="inline-block text-base font-medium px-6 py-3 rounded-lg border border-white/30 hover:border-white/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/30"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </SlideInOut>

          {/* Credenciales (ahora arriba de las métricas) */}
          <SlideInOut index={1} amount={0.9}>
            <div
              className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base opacity-90"
            >
            {['Computer Science Degree','Scrum Master','Full-Stack Engineer','Blockchain Specialist'].map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-lg border shadow-sm bg-white border-slate-200 dark:bg-white/10 dark:border-white/10 dark:shadow-none"
              >
                {c}
              </span>
            ))}
            </div>
          </SlideInOut>

          {/* Métricas reales */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12">
              {[
                { n: '12+', l: t('hero.metrics.years') },
                { n: '4', l: t('hero.metrics.platforms') },
                { n: '5', l: t('hero.metrics.countries') },
                { n: '15+', l: t('hero.metrics.stack') },
              ].map((m, i) => (
              <SlideInOut key={m.l} index={i} amount={0.6}>
                <div className="rounded-xl border p-4 md:p-5 text-center shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none">
                  <span className="block text-3xl md:text-4xl font-bold text-primary">{m.n}</span>
                  <span className="block text-xs md:text-sm opacity-80 mt-1">{m.l}</span>
                </div>
              </SlideInOut>
            ))}
          </div>

          {/* Experiencia Internacional (chips sin etiqueta) */}
          <SlideInOut index={2} amount={0.7}>
            <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-2 text-sm">
            {(t('hero.countries', { returnObjects: true }) as string[]).map(c => (
              <span key={c} className="px-3 py-1.5 rounded-lg border shadow-sm bg-white border-slate-200 dark:bg-white/10 dark:border-white/10 dark:shadow-none">{c}</span>
            ))}
            </div>
          </SlideInOut>
          {/* Stack Tecnológico */}
          <SlideInOut index={3} amount={0.5}>
            <div className="w-full mt-8 md:mt-12">
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6">{t('hero.stackTitle')}</h3>
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
              {/* Backend pills */}
              <div className="text-center">
                <h4 className="text-sm md:text-base font-extrabold leading-tight tracking-tight text-primary">{t('hero.backend')}</h4>
                <div className="mt-2 md:mt-3 flex flex-wrap justify-center gap-2">
                  <a href="https://docs.nestjs.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">NestJS</a>
                  <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Express</a>
                  <a href="https://laravel.com/docs" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Laravel</a>
                  <a href="https://www.anchor-lang.com/docs" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Anchor</a>
                </div>
              </div>
              {/* Frontend pills */}
              <div className="text-center">
                <h4 className="text-sm md:text-base font-extrabold leading-tight tracking-tight text-primary">{t('hero.frontend')}</h4>
                <div className="mt-2 md:mt-3 flex flex-wrap justify-center gap-2">
                  <a href="https://vuejs.org/guide/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Vue</a>
                  <a href="https://react.dev/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">React</a>
                  <a href="https://developer.android.com" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Android</a>
                </div>
              </div>
              {/* Database pills */}
              <div className="text-center">
                <h4 className="text-sm md:text-base font-extrabold leading-tight tracking-tight text-primary">{t('hero.database')}</h4>
                <div className="mt-2 md:mt-3 flex flex-wrap justify-center gap-2">
                  <a href="https://www.postgresql.org/docs/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Postgres</a>
                  <a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">MySQL</a>
                  <a href="https://www.mongodb.com/docs/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">MongoDB</a>
                  <a href="https://redis.io/docs/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Redis</a>
                </div>
              </div>
              {/* DevOps pills */}
              <div className="text-center">
                <h4 className="text-sm md:text-base font-extrabold leading-tight tracking-tight text-primary">{t('hero.devops')}</h4>
                <div className="mt-2 md:mt-3 flex flex-wrap justify-center gap-2">
                  <a href="https://docs.docker.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Docker</a>
                  <a href="https://nx.dev/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">Nx</a>
                  <a href="https://docs.github.com/actions" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">CI/CD</a>
                  <a href="https://docs.aws.amazon.com/" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/10 dark:border-white/10 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/15">AWS</a>
                </div>
              </div>
            </div>
            </div>
          </SlideInOut>

          {/* Especialización */}
          <SlideInOut index={4} amount={0.6}>
            <div className="mt-8 md:mt-12">
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6">{t('hero.specializationTitle')}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {(t('hero.specializations', { returnObjects: true }) as string[]).map(s => (
                <span key={s} className="px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-sky-400 to-sky-500 border border-sky-300/40 shadow-sm dark:border-white/10 dark:shadow-none">{s}</span>
              ))}
            </div>
            </div>
          </SlideInOut>

          {/* Proyectos Destacados (desktop) */}
          <SlideInOut index={5} amount={0.6}>
            <div className="mt-8 md:mt-12 hidden md:block">
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6">{t('hero.featuredTitle')}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['YDPay Platform','Satstreet Exchange','Becca Platform','The Futures Platform'].map(p => (
                <span key={p} className="px-3 py-1.5 rounded-lg text-sm border shadow-sm bg-white border-slate-200 dark:bg-white/10 dark:border-white/10 dark:shadow-none">
                  {p}
                </span>
              ))}
            </div>
            </div>
          </SlideInOut>

          {/* Value Proposition */}
          <SlideInOut index={6} amount={0.7}>
            <blockquote className="mt-8 md:mt-10 text-base md:text-lg opacity-95 border border-white/15 bg-white/5 rounded-xl px-4 md:px-6 py-3 md:py-4 italic">
              {t('hero.quote')}
            </blockquote>
          </SlideInOut>


        </motion.div> 
      </div>
    </section>
  );
}
