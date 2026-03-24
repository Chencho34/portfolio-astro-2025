import type { Experience } from "../types/experience";

export const experience: Experience[] = [
  {
    title: 'Web Developer',
    company: 'Freelance',
    link: 'https://github.com/Chencho34',
    modality: 'Remoto',
    period: '01 / 2025 - Presente',
    exp: [
      'Desarrollo de aplicaciones web para clientes de distintos sectores, entregando soluciones fullstack desde el diseño hasta el despliegue.',
      'Construcción de landing pages con Astro y TailwindCSS, priorizando rendimiento y experiencia de usuario.',
      'Implementación de APIs RESTful con Node.js y gestión de bases de datos relacionales y no relacionales según los requerimientos de cada proyecto.',
      'Comunicación directa con clientes para levantamiento de requerimientos, estimación de tiempos y entrega iterativa bajo metodología ágil.'
    ],
    technologies: ['React', 'Astro', 'Node.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'FullStack Developer',
    company: 'Center - Soft',
    link: 'https://kyoshi.com.mx/',
    location: 'CDMX',
    modality: 'Remoto',
    period: '12 / 2023 - 12 / 2024',
    description: 'Optimicé la experiencia de usuario (UX) mediante interfaces accesibles y de alto rendimiento con Next.js, Tailwind CSS y Framer Motion, mejorando la velocidad de carga en un 40% y logrando un score de 95+ en Lighthouse. Integré y aseguré APIs REST con Java, Spring Boot, JWT y MySQL, implementando un sistema de autenticación que resultó en 0 incidentes de seguridad durante el periodo de desarrollo. Lideré el desarrollo de una plataforma de e-learning bajo metodologías ágiles/SCRUM cumpliendo el 100% de los sprints. Mentoricé a 3 desarrolladores mediante pair programming y revisiones de código, mejorando la calidad del código y reduciendo bugs en producción en un 30%.',
    exp: [
      'Desarrollé desde cero una plataforma e-learning escalable con Next.js, TypeScript, Java, Spring Boot y MySQL.',
      'Implementé sistema de autenticación seguro con JWT, gestion de usuarios y control de acceso basado en roles.',
      'Construí interfaces responsivas y optimizadas aplicando lazy loading y code splitting, reduciendo el tiempo de carga inicial de 6 a 2 segundos (mejora del 67%).',
      'Integré Redux Toolkit y Axios para gestión de estado y consumo de APIs RESTful, desarrollando formularios con React Hook Form que redujeron errores en 30%.',
      'Trabajé con Scrum/Kanban en Jira, realizando code reviews y refactorización que redujeron bugs en 35%, desplegando continuamente en Vercel.',
    ],
    technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Java', 'Spring Boot', 'MySQL', 'Git', 'SCRUM'],
  }
]
