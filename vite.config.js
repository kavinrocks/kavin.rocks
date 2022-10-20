import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { extractorSvelte } from '@unocss/core';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Unocss(),
		VitePWA({
			extractors: [extractorSvelte]
		})
	]
};

export default config;
