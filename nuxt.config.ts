// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/icon'],

  css: ['@/assets/styles/main.css'],

  app: {
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
