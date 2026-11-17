// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  tailwindcss: { cssPath: '~/assets/css/tailwind.css' },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/eslint']
})