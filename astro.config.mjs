import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // We'll keep the output in a separate directory
  outDir: './dist',
  // This allows us to use React components in Astro files
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
}); 