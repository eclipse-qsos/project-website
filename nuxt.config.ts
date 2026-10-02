// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/icon', '@nuxtjs/i18n'],

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' }
    ],
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false
    }
  },

  css: ['@/assets/styles/main.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  app: {
    // Deployment path, set at build time: NUXT_APP_BASE_URL=/qsos/ npm run generate (defaults to /)
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Eclipse QSOS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'QSOS - Qualification and Selection of Open Source Software' }
      ]
    }
  }
})
