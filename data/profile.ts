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
    'He liderado equipos multidisciplinarios (producto, diseño, desarrollo, QA) end‑to‑end: descubrimiento, definición de roadmap, ejecución ágil y despliegue.',
    'Experiencia en fintech (pagos, crédito, cripto) y proptech (gestión inmobiliaria), articulando estrategia y delivery con métricas (lead time, throughput, calidad).',
    'Como desarrollador, disfruto construir interfaces cuidadas y mantenibles con React/Next.js y un stack moderno (TypeScript, Tailwind, automatización CI/CD).',
    'Mi estilo combina energía y foco: acción con criterio, estética sin exceso y resultados que hablan por sí solos.',
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
      role: 'Project Manager',
      company: 'Satstreet — Plataforma de Intercambio de Criptoactivos',
      period: '2020 – 2024',
      highlights: [
        'Definición de objetivos estratégicos y técnicos para el desarrollo de una plataforma de intercambio de criptoactivos.',
        'Coordinación de equipos bajo metodología Scrum, seguimiento de tareas y resolución de bloqueos.',
        'Diseño de base de datos para gestión de wallets, transacciones y reportes financieros.',
        'Elaboración de wireframes para interfaces web y móviles, optimizando la experiencia de usuario.',
      ],
    },
    {
      role: 'Project Manager',
      company: 'Smart Apps — Proyecto Becca (Inventario y Cobranza)',
      period: '2024 – 2025',
      highlights: [
        'Integración de VisaNet con el sistema administrativo SmartApp a través de una aplicación Android.',
        'Diseño de wireframes para la gestión de productos dentro del APK.',
        'Selección y conformación del equipo técnico mediante entrevistas y casting.',
        'Gestión ágil del proyecto con definición y seguimiento de tareas clave.',
      ],
    },
    {
      role: 'Project Manager',
      company: 'Dedica — Casa de Empeño (Plataforma YDPAY)',
      period: '2024 – 2025',
      highlights: [
        'Levantamiento de información técnica para identificar errores, proponer mejoras y asesorar en definición de ideas.',
        'Evaluación y segmentación de personal con asignación estratégica de roles.',
        'Dirección de equipos bajo Scrum, asegurando cumplimiento de objetivos del sistema de crédito prendatario.',
      ],
    },
    {
      role: 'Project Manager',
      company: 'XDait — Casa de Empeño (Plataforma YDPAY)',
      period: '2025 – Actualidad',
      highlights: [
        'Coordinación del desarrollo de la plataforma YDPAY desde la perspectiva técnica y estratégica.',
        'Supervisión de procesos de integración con sistemas financieros y administrativos.',
        'Gestión de equipo multidisciplinario con enfoque en entregables funcionales y escalables.',
      ],
    },
    {
      role: 'Project Manager',
      company: 'Soy Agencia — Desarrollo Web y Préstamos por Nómina',
      period: '2019',
      highlights: [
        'Proyecto web: análisis del sistema, definición de objetivos funcionales/técnicos, coordinación Scrum, diseño de base de datos y wireframes para la interfaz principal.',
        'Préstamos por nómina: reactivación de un proyecto detenido, coordinación hasta producción y validación de funcionalidades clave garantizando estabilidad.',
      ],
    },
    {
      role: 'Project Manager',
      company: 'THE FUTURE',
      period: '2017 – 2018',
      highlights: [
        'Gestión integral de proyectos tecnológicos, coordinando equipos y asegurando la entrega de funcionalidades alineadas a objetivos de negocio.',
      ],
    },
    {
      role: 'Team Leader Full Stack / Co‑Project Manager',
      company: 'SFANET.NET (Venezuela)',
      period: '2017',
      highlights: [
        'Desarrollo del sistema administrativo completo con módulos de gestión empresarial, inventario, activación, bloqueo y recarga de líneas GSM.',
        'Implementación de conexiones B2B para habilitar la entrega de internet GSM y recargas desde puntos autorizados.',
        'Integración de reportes financieros y contables con trazabilidad y controles para eficiencia operativa.',
      ],
    },
  ] as ExperienceItem[],
};
