import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    // Site entièrement statique, publié sur GitHub Pages.
    adapter: adapter({ fallback: '404.html' }),
    prerender: { handleHttpError: 'fail' }
  }
};
