// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebastianomargimenez.github.io',
  base: process.env.GITHUB_ACTIONS ? '/Mendoza-LENIS-GSAP' : '/',
  server: {
    host: true,
  },
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.dev', '.ngrok.io'],
    },
  },
});
