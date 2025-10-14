import Link from 'next/link';
import { useEffect, useState, useCallback, useRef } from 'react';
import { FaImages, FaEnvelope, FaShieldAlt, FaBars, FaTimes, FaSun, FaMoon, FaChevronDown, FaUserTie, FaFolderOpen } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

// Navigation model with group (dropdown) support
interface NavGroup {
  id: string; // internal id for active state (group or single)
  label: string;
  icon?: JSX.Element;
  // For groups, ids of the page sections belonging to it
  sectionIds?: string[];
  // Items for dropdown (if any)
  items?: { id: string; label: string }[];
}

const NAV: NavGroup[] = [
  {
    id: 'about-group',
    label: 'Sobre mí',
    icon: <FaUserTie />,
    sectionIds: ['about', 'skills', 'experience', 'certifications'],
    items: [
      { id: 'about', label: 'Perfil' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'experience', label: 'Experiencia' },
      { id: 'certifications', label: 'Certificaciones' },
    ],
  },
  { id: 'projects', label: 'Proyectos', icon: <FaFolderOpen />, sectionIds: ['projects'] },
  { id: 'gallery', label: 'Galería', icon: <FaImages />, sectionIds: ['gallery'] },
  { id: 'contact', label: 'Contacto', icon: <FaEnvelope />, sectionIds: ['contact'] },
];

// Flat list of section ids to observe
const OBSERVE_IDS = Array.from(new Set(NAV.flatMap(n => n.sectionIds || [])));

export function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [active, setActive] = useState<string>('about-group');
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimers = useRef<Record<string, number>>({});
  const { theme, toggle: toggleTheme } = useTheme();

  const toggleMenu = () => setOpen(o => !o);
  const closeMenu = useCallback(() => setOpen(false), []);

  // Manage header shadow / backgrounds on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for active section (group aware)
  useEffect(() => {
    const ratios: Record<string, number> = {};
    const pickActive = () => {
      let bestId = NAV[0].id;
      let bestRatio = 0;
      for (const nav of NAV) {
        const sectionIds = nav.sectionIds || [];
        let groupRatio = 0;
        for (const id of sectionIds) {
          groupRatio = Math.max(groupRatio, ratios[id] ?? 0);
        }
        if (groupRatio > bestRatio + 0.001) { // epsilon against flicker
          bestRatio = groupRatio;
          bestId = nav.id;
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
    const maybePad = (id: string) => {
      const el = document.getElementById(id);
      if (el && el.offsetHeight < 200) {
        el.classList.add('min-h-[200px]');
      }
    };
    OBSERVE_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        maybePad(id);
        observer.observe(el);
      }
    });
    setTimeout(pickActive, 50);
    return () => observer.disconnect();
  }, []);

  // Highlight privacy route
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/privacy') setActive('privacy');
    }
  }, []);

  // Dropdown helpers (desktop hover + keyboard)
  const clearCloseTimer = (id: string) => {
    const t = closeTimers.current[id];
    if (t) {
      window.clearTimeout(t);
      delete closeTimers.current[id];
    }
  };
  const scheduleClose = (id: string) => {
    clearCloseTimer(id);
    closeTimers.current[id] = window.setTimeout(() => {
      setOpenDropdown(d => (d === id ? null : d));
      delete closeTimers.current[id];
    }, 160);
  };

  const baseHeader = 'fixed top-0 inset-x-0 z-50 backdrop-blur transition-colors text-slate-800 dark:text-white';
  const bg = scrolled
    ? 'bg-white/85 dark:bg-black/75 shadow-lg border-b border-slate-200/70 dark:border-white/10'
    : 'bg-white/70 dark:bg-black/55 border-b border-slate-200/60 dark:border-white/10';

  const linkBase = 'flex items-center gap-1 px-0 py-1 focus:outline-none focus-visible:ring focus-visible:ring-primary/50 rounded';

  return (
    <header className={`${baseHeader} ${bg}`}>
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link href="#home" className="font-bold tracking-wide" onClick={closeMenu}>Hernny Malaver</Link>
        <div className="flex items-center gap-2 md:gap-4">
          <button aria-label="Abrir menú" className="md:hidden p-2 rounded hover:bg-slate-900/5 dark:hover:bg-white/10" onClick={toggleMenu}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav
          className={
            `md:static md:flex md:flex-row md:gap-6 md:bg-transparent md:p-0 text-sm font-medium ` +
            (open
              ? 'absolute top-full left-0 right-0 bg-white/95 dark:bg-black/90 backdrop-blur md:backdrop-blur-none flex flex-col gap-3 p-6 border-b border-slate-200 dark:border-white/10 md:border-none'
              : 'hidden md:flex')
          }
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            {/* Theme toggle standalone (desktop first item) */}
            <li className="order-last md:order-none md:flex">
              <button
                aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
                onClick={toggleTheme}
                className="p-2 rounded hover:bg-slate-900/5 dark:hover:bg-white/10 focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
              >
                {theme === 'dark' ? <FaSun className="text-amber-400" /> : <FaMoon className="text-slate-600" />}
              </button>
            </li>
            {NAV.map(item => {
              const isActive = active === item.id;
              const activeClass = isActive ? 'text-primary' : 'opacity-80 hover:text-primary';
              if (item.items && item.items.length) {
                const openThis = openDropdown === item.id;
                return (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => { clearCloseTimer(item.id); setOpenDropdown(item.id); }}
                    onMouseLeave={() => scheduleClose(item.id)}
                  >
                    <button
                      className={`${linkBase} ${activeClass}`}
                      aria-haspopup="true"
                      aria-expanded={openThis}
                      onClick={(e) => {
                        // In mobile menu act as accordion toggle
                        if (window.innerWidth < 768) {
                          e.preventDefault();
                          setOpenDropdown(d => d === item.id ? null : item.id);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') setOpenDropdown(null);
                        if (e.key === 'ArrowDown') {
                          e.preventDefault();
                          setOpenDropdown(item.id);
                          const first = document.getElementById(`dd-${item.items![0].id}`);
                          first?.focus();
                        }
                      }}
                    >
                      <span className="flex items-center gap-1">{item.icon}{item.label} <FaChevronDown className={`transition-transform ${openThis ? 'rotate-180' : ''}`} /></span>
                    </button>
                    {/* Desktop dropdown */}
                    <div
                      className={`hidden md:block absolute left-0 mt-2 min-w-[12rem] rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 backdrop-blur shadow-lg p-2 transition opacity-0 translate-y-1 pointer-events-none ${openDropdown === item.id ? '!opacity-100 !translate-y-0 !pointer-events-auto' : ''}`}
                      role="menu"
                      aria-label={item.label}
                    >
                      {item.items.map(sub => (
                        <a
                          key={sub.id}
                          id={`dd-${sub.id}`}
                          href={`#${sub.id}`}
                          role="menuitem"
                          className="block px-3 py-1.5 rounded text-sm opacity-80 hover:opacity-100 hover:bg-slate-900/5 dark:hover:bg-white/10 focus:outline-none focus-visible:ring focus-visible:ring-primary/40"
                          onClick={() => { closeMenu(); setOpenDropdown(null); }}
                          onKeyDown={(e) => { if (e.key === 'Escape') setOpenDropdown(null); }}
                        >{sub.label}</a>
                      ))}
                    </div>
                    {/* Mobile nested list */}
                    {open && openDropdown === item.id && (
                      <ul className="md:hidden mt-1 ml-2 border-l border-slate-300/40 dark:border-white/10 pl-3 flex flex-col gap-1">
                        {item.items.map(sub => (
                          <li key={sub.id}>
                            <a
                              href={`#${sub.id}`}
                              className="block py-1 text-sm opacity-80 hover:text-primary"
                              onClick={() => { closeMenu(); setOpenDropdown(null); }}
                            >{sub.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.sectionIds?.[0] || item.id}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'true' : undefined}
                    className={`${linkBase} ${activeClass}`}
                  >
                    {Icon && Icon} {item.label}
                  </a>
                </li>
              );
            })}
            <li>
              <Link
                href="/privacy"
                onClick={closeMenu}
                aria-current={active === 'privacy' ? 'true' : undefined}
                className={`${linkBase} ${active === 'privacy' ? 'text-primary' : 'opacity-80 hover:text-primary'}`}
              >
                <FaShieldAlt /> Privacidad
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
