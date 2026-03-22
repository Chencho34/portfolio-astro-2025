---
title: "WhatsApp Chatbot - Cotizador de Arquitectura"
description: "Servidor backend que implementa un chatbot de WhatsApp vía Twilio para cotizaciones automatizadas de proyectos de construcción. Los usuarios interactúan a través de WhatsApp para seleccionar tipo de trabajo (habitación, baño, fachada) y recibir estimados de precio en MXN según los m² ingresados."
image: "./cover.webp"
technologies: ["Node.js", "TypeScript", "Express.js", "Twilio", "dotenv", "Morgan"]
featured: false
date: 2025-10-08
type: "backend"
githubUrl: "https://github.com/Chencho34/shopping-cart"
demoUrl: "https://cart-shopping-app.netlify.app/"
draft: false
---

## Overview

DevFlow started as an internal tool to solve a real pain: engineers spending too much time context-switching between GitHub, Jira, Slack, and CI dashboards. The idea was simple — one screen, one refresh, full picture.

After three months of iteration with a team of five, it became a fully-featured product used by over 40 engineers across two organizations.

## Key Features

- **Live PR queue** — shows open pull requests sorted by waiting time, with inline diff previews and review assignment
- **CI/CD pipeline viewer** — aggregates build status from GitHub Actions, CircleCI, and Vercel in a unified timeline
- **Velocity tracker** — charts sprint throughput, cycle time, and deployment frequency with drill-down per contributor
- **Alert center** — configurable thresholds for flaky tests, long-running builds, and unreviewed PRs over 24h

## Architecture

The backend is a Node.js service with a REST + WebSocket API. PostgreSQL handles persistence for metrics and snapshots. Redis sits in front for real-time event pub/sub between the GitHub webhook receiver and the dashboard clients.

```bash
# Start the full stack with Docker Compose
docker compose up --build

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

The frontend is a React SPA with TailwindCSS. Data polling uses React Query with aggressive stale-time tuning — most views update every 30s, the CI feed every 5s via WebSocket fallback.

## Challenges

The hardest part was rate-limiting. GitHub's API is generous but not unlimited. We implemented a two-layer cache: an in-memory LRU for sub-second reads and a PostgreSQL snapshot store for anything older than 5 minutes. This reduced API calls by ~87% without any perceivable staleness for the user.

## What I learned

Building this solidified my understanding of real-time systems design. Specifically: when to push vs poll, how to manage partial failures in aggregation pipelines, and the non-obvious cost of keeping WebSocket connections alive at scale.
