import Link from 'next/link';
import { FaImages, FaEnvelope, FaShieldAlt } from 'react-icons/fa';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10 supports-[backdrop-filter]:bg-black/40">
      <div className="container flex items-center justify-between py-4">
        <Link href="#home" className="font-bold tracking-wide">Hernny Malaver</Link>
        <nav className="flex flex-wrap gap-4 text-sm">
          <a href="#about" className="hover:text-primary">Sobre mí</a>
          <a href="#projects" className="hover:text-primary">Proyectos</a>
          <a href="#gallery" className="hover:text-primary flex items-center gap-1"><FaImages /> Galería</a>
          <a href="#contact" className="hover:text-primary flex items-center gap-1"><FaEnvelope /> Contacto</a>
          <Link href="/privacy" className="hover:text-primary flex items-center gap-1"><FaShieldAlt /> Privacidad</Link>
        </nav>
      </div>
    </header>
  );
}
