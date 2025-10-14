import { Layout } from '../components/Layout';
import { Hero } from '../components/home/Hero';
import { GoogleGallery } from '../components/gallery/GoogleGallery';
import { Scheduler } from '../components/schedule/Scheduler';
import { ContactForm } from '../components/contact/ContactForm';

export default function HomePage() {
  return (
    <Layout title="Mi Portfolio">
      <Hero />
      <GoogleGallery />
      <Scheduler />
      <ContactForm />
    </Layout>
  );
}
