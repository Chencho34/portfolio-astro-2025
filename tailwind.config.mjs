/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0a0a0a',
        surface: '#111111',
        surface2: '#1a1a1a',
        line: '#1f1f1f',
        line2: '#2a2a2a',
        lime: '#aadd55',
        ink: '#f0f0f0',
        muted: '#888888',
        faint: '#444444',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '900px',
      },
      height: {
        nav: '56px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}