import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { FaImages, FaEnvelope, FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';

const SECTIONS = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'gallery', label: 'Galería', icon: <FaImages /> },
  { id: 'contact', label: 'Contacto', icon: <FaEnvelope /> },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('about');
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setOpen(o => !o);
  const close = useCallback(() => setOpen(false), []);

  // Track scroll position for shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlighting using a persistent ratio map for stability
  useEffect(() => {
    const ratios: Record<string, number> = {};
    const pickActive = () => {
      // Choose section with highest ratio above a minimal threshold, fallback to first
      let bestId = SECTIONS[0].id;
      let bestRatio = 0;
      for (const s of SECTIONS) {
        const r = ratios[s.id] ?? 0;
        if (r > bestRatio + 0.001) { // small epsilon to avoid flicker
          bestRatio = r;
          bestId = s.id;
        }
      }
      setActive(bestId);
    };
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (!id) return;
          ratios[id] = entry.intersectionRatio;
        });
        pickActive();
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: Array.from({ length: 13 }, (_, i) => i / 12) }
    );
    // Ensure gallery has at least min height for observation (if very small)
    const maybePad = (id: string) => {
      const el = document.getElementById(id);
      if (el && el.offsetHeight < 200) {
        el.classList.add('min-h-[200px]');
      }
    };
    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) {
        maybePad(s.id);
        observer.observe(el);
      }
    });
    // Initial pick in case some sections are already in view before observer fires
    setTimeout(pickActive, 50);
    return () => observer.disconnect();
  }, []);

  // Highlight privacy when on that page route
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/privacy') setActive('privacy');
    }
  }, []);

  const baseHeader = 'fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 transition-colors';
  const bg = scrolled ? 'bg-black/70 shadow-lg shadow-black/40 border-b border-white/10' : 'bg-black/55 border-b border-white/10';

  return (
    <header className={`${baseHeader} ${bg}`}>
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link href="#home" className="font-bold tracking-wide" onClick={close}>Hernny Malaver</Link>
        <button aria-label="Abrir menú" className="md:hidden p-2 rounded hover:bg-white/10" onClick={toggle}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          className={
            `md:static md:flex md:flex-row md:gap-6 md:bg-transparent md:p-0 text-sm font-medium ` +
            (open
              ? 'absolute top-full left-0 right-0 bg-black/90 backdrop-blur md:backdrop-blur-none flex flex-col gap-2 p-6 border-b border-white/10 md:border-none'
              : 'hidden md:flex')
          }
        >
          {SECTIONS.map(s => {
            const Icon = s.icon;
            const activeClass = active === s.id ? 'text-primary' : 'opacity-80 hover:text-primary';
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={close}
                aria-current={active === s.id ? 'true' : undefined}
                className={`flex items-center gap-1 ${activeClass}`}
              >
                {Icon && Icon} {s.label}
              </a>
            );
          })}
          <Link href="/privacy" onClick={close} aria-current={active === 'privacy' ? 'true' : undefined} className={`flex items-center gap-1 ${active === 'privacy' ? 'text-primary' : 'opacity-80 hover:text-primary'}`}><FaShieldAlt /> Privacidad</Link>
        </nav>
      </div>
    </header>
  );
}
