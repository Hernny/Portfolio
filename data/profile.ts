export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const profile = {
  name: 'Hernny Malaver',
  title: 'Director de proyectos y desarrollador de software',
  email: 'hernny.malaver@gmail.com',
  phone: '+58 424 877 0917',
  linkedin: 'https://www.linkedin.com/in/hernny-malaver/',
  summary: [
    'Director de proyectos y desarrollador de software con enfoque en entregar valor de negocio mediante productos digitales de calidad.',
    'Experiencia liderando equipos multidisciplinarios, definiendo roadmaps, y construyendo aplicaciones modernas con React/Next.js, APIs y cloud.',
  ],
  skills: {
    gestion: ['Dirección de proyectos', 'Scrum/Kanban', 'Roadmapping', 'Stakeholder management', 'Métricas & KPIs'],
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'REST APIs', 'Auth/OAuth', 'zod', 'date-fns'],
    devops: ['GitHub Actions', 'CI/CD', 'Git', 'GitHub Pages'],
    herramientas: ['Jira', 'Confluence', 'GitHub', 'Postman']
  },
  experience: [
    {
      role: 'Director de Proyectos',
      company: 'Empresa / Cliente',
      period: 'Año – Presente',
      highlights: [
        'Lideré la planificación y entrega de iniciativas digitales, alineando objetivos con stakeholders.',
        'Implementé tableros de control con métricas de entrega y calidad para mejorar la toma de decisiones.',
      ],
    },
    {
      role: 'Desarrollador de Software',
      company: 'Empresa / Cliente',
      period: 'Año – Año',
      highlights: [
        'Desarrollé aplicaciones web con Next.js/React, integrando APIs de terceros y animaciones fluidas.',
        'Mejoré performance y DX con TypeScript, componentes reutilizables y automatización CI/CD.',
      ],
    },
  ] as ExperienceItem[],
};
