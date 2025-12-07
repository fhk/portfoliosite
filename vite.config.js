import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		global: 'globalThis'
	},
	optimizeDeps: {
		exclude: ['p5-svelte']
	},
	ssr: {
		external: ['p5', 'p5-svelte']
	}
});