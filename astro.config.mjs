// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages user site. Replace with your custom domain once it's connected.
  site: 'https://yoho11.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});