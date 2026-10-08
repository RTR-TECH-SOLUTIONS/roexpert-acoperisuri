// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site-ul live stă pe ro-expert.ro, la rădăcină (acum pe GitHub Pages cu domeniu propriu).
// DEMO_BASE rămâne doar pentru un eventual build într-un subdirector.
const demoBase = process.env.DEMO_BASE;

export default defineConfig({
  devToolbar: { enabled: false },
  site: demoBase ? 'https://rtr-tech-solutions.github.io' : 'https://ro-expert.ro',
  base: demoBase ?? '/',
  vite: { plugins: [tailwindcss()] },
});
