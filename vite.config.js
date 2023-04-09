import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import extractorSvelte from '@unocss/extractor-svelte';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		Unocss({
			extractors: [extractorSvelte()]
		}),
		sveltekit(),
		VitePWA()
	]
};

export default config;
