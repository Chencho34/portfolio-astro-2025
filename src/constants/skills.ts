import { Astro, Bootstrap, Docker, Express, Git, Github, JavaScript, Next, Node, Npm, Postgres, Postman, React, Sequelize, Tailwind, TypeScript, VsCode, Yarn } from '../components/icons/tecnologies/index'

export const skills: Skills = {
  frontend: [
    { name: "React", icon: React },
    { name: "Astro", icon: Astro },
    { name: "Next.js", icon: Next },
    { name: "Tailwind", icon: Tailwind },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "JS", icon: JavaScript },
    { name: "TS", icon: TypeScript }
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
    { name: "VS Code", icon: VsCode },
    { name: "Postman", icon: Postman },
    { name: "NPM", icon: Npm },
    { name: "Yarn", icon: Yarn }
  ]
};
