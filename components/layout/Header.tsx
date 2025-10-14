import Link from 'next/link';
import { FaHome, FaRegCalendarAlt, FaImages, FaEnvelope, FaShieldAlt } from 'react-icons/fa';

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30">
      <div className="container flex items-center justify-between py-4">
  <Link href="#home" className="font-bold tracking-wide">Hernny Malaver</Link>
        <nav className="flex gap-4 text-sm">
          <a href="#home" className="hover:text-primary flex items-center gap-1"><FaHome /> Inicio</a>
          <a href="#about" className="hover:text-primary flex items-center gap-1">Sobre mí</a>
          <a href="#skills" className="hover:text-primary flex items-center gap-1">Habilidades</a>
          <a href="#experience" className="hover:text-primary flex items-center gap-1">Experiencia</a>
          <a href="#projects" className="hover:text-primary flex items-center gap-1">Proyectos</a>
          <a href="#certifications" className="hover:text-primary flex items-center gap-1">Certificaciones</a>
          <a href="#gallery" className="hover:text-primary flex items-center gap-1"><FaImages /> Galería</a>
          <a href="#schedule" className="hover:text-primary flex items-center gap-1"><FaRegCalendarAlt /> Agendar</a>
          <a href="#contact" className="hover:text-primary flex items-center gap-1"><FaEnvelope /> Contacto</a>
          <Link href="/privacy" className="hover:text-primary flex items-center gap-1"><FaShieldAlt /> Privacidad</Link>
        </nav>
      </div>
    </header>
  );
}
