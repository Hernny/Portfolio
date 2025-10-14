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
      'Tablero con KPIs de entrega y calidad, integración con GitHub Actions y reportes periódicos.',
    stack: ['Next.js', 'TypeScript', 'GitHub Actions'],
  },
  {
    title: 'Portal de portafolio personal',
    summary:
      'Sitio estático con SPA, animaciones y galería de imágenes desde Google Drive, optimizado para GitHub Pages.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Google APIs'],
  },
];
