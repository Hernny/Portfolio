import { profile } from '../../data/profile';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

export function ContactInfo() {
  return (
    <section id="contact" className="section container">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <a href={`mailto:${profile.email}`} className="flex items-center gap-3 bg-white/5 rounded p-4 border border-white/10 hover:border-white/20">
          <FaEnvelope className="text-primary" />
          <div>
            <p className="text-sm opacity-70">Email</p>
            <p>{profile.email}</p>
          </div>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/5 rounded p-4 border border-white/10 hover:border-white/20">
          <FaLinkedin className="text-primary" />
          <div>
            <p className="text-sm opacity-70">LinkedIn</p>
            <p className="truncate">{profile.linkedin}</p>
          </div>
        </a>
        <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 bg-white/5 rounded p-4 border border-white/10 hover:border-white/20">
          <FaPhone className="text-primary" />
          <div>
            <p className="text-sm opacity-70">Teléfono</p>
            <p>{profile.phone}</p>
          </div>
        </a>
      </div>
    </section>
  );
}
