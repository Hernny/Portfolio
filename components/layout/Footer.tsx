import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container py-8 flex flex-col md:flex-row items-center gap-3 text-sm">
        <p className="opacity-70">© {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
        <div className="ml-auto flex gap-4 text-xl">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
