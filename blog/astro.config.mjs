// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://nisarg38.github.io',
	base: '/Portfolio-Website/blog',
	integrations: [mdx(), sitemap()],
	output: 'static',
	// GitHub Pages deployment needs this
	build: {
		format: 'file',
	},
});
