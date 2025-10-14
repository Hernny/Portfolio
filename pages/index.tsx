import { Layout } from '../components/Layout';
import { Hero } from '../components/home/Hero';
import { Gallery } from '../components/gallery/GoogleGallery';
import { About } from '../components/profile/About';
import { Skills } from '../components/profile/Skills';
import { Experience } from '../components/profile/Experience';
import { ContactInfo } from '../components/profile/ContactInfo';
import { Projects } from '../components/profile/Projects';
import { Certifications } from '../components/profile/Certifications';
import { Scheduler } from '../components/schedule/Scheduler';
import { ContactForm } from '../components/contact/ContactForm';

export default function HomePage() {
  return (
  <Layout title="Hernny Malaver — Director de proyectos y desarrollador de software">
      <Hero />
      <About />
      <Skills />
      <Experience />
  <Projects />
  <Certifications />
      <Gallery />
      <Scheduler />
      <ContactInfo />
      <ContactForm />
    </Layout>
  );
}
