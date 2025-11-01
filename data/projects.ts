export type Project = {
  title: string;
  summary: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: 'Plataforma de intercambio de criptoactivos (Satstreet)',
    summary:
      '2020–2024 · Definición de objetivos técnicos/estratégicos, modelado de datos (wallets y transacciones), wireframes para web/móvil y coordinación Scrum de equipo.',
    stack: ['Scrum', 'Modelado de datos', 'UX Wireframing'],
  },
  {
    title: 'Becca — Inventario y Cobranza (Smart Apps)',
    summary:
      '2024–2025 · Integración de VisaNet con sistema administrativo vía app Android; diseño de wireframes y conformación del equipo técnico.',
    stack: ['Android', 'VisaNet', 'Wireframing', 'Agile'],
  },
  {
    title: 'University Tower — Gestión Inmobiliaria',
    summary:
      'Levantamiento de procesos, propuesta de solución y base de datos para mensajería interna, averías y gestión empresarial.',
    stack: ['Análisis de procesos', 'Modelado de datos', 'Agile'],
  },
  {
    title: 'YDPAY — Crédito prendatario (Dedica/XDait)',
    summary:
      '2024–Actualidad · Dirección y coordinación técnica/estratégica de la plataforma, integraciones con sistemas financieros y administración ágil del equipo.',
    stack: ['Scrum', 'Fintech', 'Integraciones'],
  },
  {
    title: 'Soy Agencia — Web y préstamos por nómina',
    summary:
      '2019 · Análisis del sistema, definición técnica, diseño de base de datos y wireframes. Reactivación y puesta en producción de proyecto de préstamos por nómina.',
    stack: ['Scrum', 'Wireframing', 'Modelado de datos', 'Delivery'],
  },
];
