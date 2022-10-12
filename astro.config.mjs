import { defineConfig } from 'astro/config';

// https://astro.build/config
import vue from '@astrojs/vue';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  vite: {
    ssr: {
      external: ['svgo']
    },
    plugins: [Icons({
      compiler: 'vue3'
    })]
  },
  output: "server",
  adapter: netlify()
});