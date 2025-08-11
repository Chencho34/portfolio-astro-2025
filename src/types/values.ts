import type { AstroComponentFactory } from "astro/runtime/server/index.js"

export interface Values {
  title: string
  description: string
  icon: AstroComponentFactory
}
