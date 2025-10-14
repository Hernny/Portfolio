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
    'Director de proyectos y desarrollador de software con mentalidad de producto: traduzco objetivos de negocio en soluciones digitales claras, medibles y elegantes.',
    'He liderado equipos multidisciplinarios (producto, diseño, desarrollo, QA) en iniciativas end‑to‑end: descubrimiento, definición de roadmap, ejecución ágil y despliegue.',
    'Me especializo en articular estrategia y delivery: priorización por impacto, métricas (lead time, throughput, calidad) y comunicación transparente con stakeholders.',
    'Como desarrollador, disfruto construir interfaces cuidadas y mantenibles usando React/Next.js y un stack moderno (TypeScript, Tailwind, automatización CI/CD).',
    'Mi estilo combina energía y foco: acción con criterio, estética sin exceso, y resultados que hablan por sí solos.',
  ],
  skills: {
    gestion: [
      'Dirección de proyectos',
      'Scrum/Kanban (enfoque empírico)',
      'Roadmapping y priorización por impacto',
      'Stakeholder management',
      'Métricas & KPIs (lead time, throughput, calidad)'
    ],
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Accesibilidad (a11y)'],
    backend: ['Node.js', 'REST APIs', 'Auth/OAuth', 'zod', 'date-fns'],
    devops: ['GitHub Actions', 'CI/CD', 'Git', 'GitHub Pages', 'Pruebas (Vitest, Playwright)'],
    herramientas: ['Jira', 'Confluence', 'GitHub', 'Postman']
  },
  experience: [
    {
      role: 'Director de Proyectos',
      company: 'Diversos clientes',
      period: 'Año – Presente',
      highlights: [
        'Planifiqué y conduje iniciativas digitales de principio a fin, alineando visión, alcance y métricas con stakeholders clave.',
        'Implementé tableros operativos y de producto con indicadores accionables para guiar decisiones y gestionar riesgos.',
        'Optimicé flujos de trabajo con prácticas ágiles, mejorando tiempos de ciclo y la previsibilidad del delivery.',
        'Fomenté una cultura de calidad y mejora continua: feedback temprano, QA integrado y automatización en CI/CD.',
      ],
    },
    {
      role: 'Desarrollador de Software',
      company: 'Empresa / Cliente',
      period: 'Año – Año',
      highlights: [
        'Desarrollé aplicaciones web con Next.js/React priorizando legibilidad, performance y experiencia de usuario.',
        'Integré APIs de terceros y animé micro‑interacciones con Framer Motion para elevar la percepción de calidad.',
        'Mejoré DX con TypeScript estricto, componentes reutilizables y pipelines automatizados de build, test y despliegue.',
      ],
    },
  ] as ExperienceItem[],
};
