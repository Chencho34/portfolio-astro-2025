import { Astro, Bootstrap, Docker, Express, Git, Github, JavaScript, Next, Node, Npm, Postgres, Postman, React, Sequelize, Tailwind, TypeScript, VsCode, Yarn } from '../components/icons/tecnologies/index'
import type { Skills } from '../types/skills';

export const skills: Skills = {
  frontend: [
    { name: "React", icon: React },
    { name: "Next.js", icon: Next },
    { name: "Astro", icon: Astro },
    { name: "TailwindCSS", icon: Tailwind },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "JavaScript", icon: JavaScript },
    { name: "TypeScript", icon: TypeScript },
  ],
  backend: [
    { name: "Node.js", icon: Node },
    { name: "Express", icon: Express },
    { name: "Sequelize", icon: Sequelize },
    { name: "PostgreSQL", icon: Postgres }
  ],
  tools: [
    { name: "Git", icon: Git },
    { name: "GitHub", icon: Github },
    { name: "Docker", icon: Docker },
    { name: "Vercel", icon: Npm },
    { name: "Postman", icon: Postman },
    { name: "VS Code", icon: VsCode },
    { name: "PNPM", icon: Npm },
    { name: "NPM", icon: Npm },
    { name: "YARN", icon: Yarn }
  ]
};
