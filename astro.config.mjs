// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      host: '192.168.1.68'
    },
    plugins: [tailwindcss()],
  },
});