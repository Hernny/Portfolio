import { Layout } from '../components/Layout';
import { Hero } from '../components/home/Hero';
import { Gallery } from '../components/gallery/GoogleGallery';
import { About } from '../components/profile/About';
import { Skills } from '../components/profile/Skills';
import { Experience } from '../components/profile/Experience';
// Removed separate ContactInfo & ContactForm in favor of unified ContactSection
import { Projects } from '../components/profile/Projects';
import { Scheduler } from '../components/schedule/Scheduler';
import { ContactSection } from '../components/contact/ContactSection';

export default function HomePage() {
  return (
  <Layout
    title="Hernny Malaver — Dirección de proyectos Fintech y desarrollo de software"
    description="Dirección de proyectos Fintech y desarrollo full‑stack. Experiencia en NestJS, React, bases de datos y DevOps. Portafolio con proyectos destacados y experiencia internacional."
    keywords={[
      'dirección de proyectos',
      'project management',
      'fintech',
      'full‑stack',
      'NestJS',
      'React',
      'DevOps',
      'Docker',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'blockchain',
      'plataformas de pago',
      'ecommerce',
      'experiencia internacional',
      'portafolio',
    ]}
    canonicalPath="/"
  >
    <Hero />
    <About />
    <div className="w-full relative overflow-hidden bg-slate-100 dark:bg-slate-900">
      <Skills />
    </div>
    <Experience />
    <div className="w-full relative overflow-hidden bg-slate-100 dark:bg-slate-900">
      <Projects />
    </div>
    <Gallery />
    <div className="w-full relative overflow-hidden bg-slate-100 dark:bg-slate-900">
      <Scheduler />
    </div>
    <ContactSection />
  </Layout>
  );
}
