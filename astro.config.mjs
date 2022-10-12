import { defineConfig } from 'astro/config'

// https://astro.build/config
import vue from '@astrojs/vue'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
      // For example <img src="/images/logo.png"> will not work without the code below
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
    tailwind(),
  ],
  vite: {
    ssr: {
      external: ['svgo'],
    },
    plugins: [
      Icons({
        compiler: 'vue3',
      }),
    ],
  },
  output: 'server',
  adapter: netlify(),
})
