import { defineConfig } from 'unocss';
import transformerDirective from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
	transformers: [transformerDirective(), transformerVariantGroup()],
	presets: [presetUno(), presetIcons()]
});
