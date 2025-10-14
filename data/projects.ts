export type Project = {
  title: string;
  summary: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: 'Dashboard de métricas de proyectos',
    summary:
      'Tablero operativo con KPIs de entrega y calidad (lead time, throughput, fallas), integrado con GitHub Actions y reportes periódicos para la toma de decisiones.',
    stack: ['Next.js', 'TypeScript', 'GitHub Actions'],
  },
  {
    title: 'Portal de portafolio personal',
    summary:
      'SPA estática con animaciones refinadas, theming light/dark, dropdown accesibles y galería resiliente vía Google Drive (fallback locales), optimizada para GitHub Pages.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Google APIs'],
  },
];
