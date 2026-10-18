// https://nuxt.com/docs/api/configuration/nuxt-config

// Deployment path, set at build time: NUXT_APP_BASE_URL=/qsos/ npm run generate (defaults to /)
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

const defaultLocale = 'en'
const localeCookie = 'i18n_redirected'
const locales = [
  { code: 'en', language: 'en', name: 'English', file: 'en.json' },
  { code: 'fr', language: 'fr', name: 'Français', file: 'fr.json' }
]

// The site is statically generated and `/` is prerendered in the default locale.
// Left to @nuxtjs/i18n, the redirect to a detected locale happens client-side
// before hydration: the default-locale page flashes, then Vue hydrates the other
// locale over it and leaves stale attributes such as the active language (#43).
// This runs in <head> before anything renders, with the same precedence as
// `detectBrowserLanguage`: saved cookie, then navigator.languages, then default.
const localeRedirectScript = `(function () {
  var base = ${JSON.stringify(baseURL)}
  if (location.pathname !== base) return
  var codes = ${JSON.stringify(locales.map(l => l.code))}
  var match = document.cookie.match(/(?:^|; )${localeCookie}=([^;]*)/)
  var locale = match && codes.indexOf(match[1]) !== -1 ? match[1] : null
  if (!locale) {
    var langs = navigator.languages || [navigator.language]
    for (var i = 0; i < langs.length && !locale; i++) {
      var code = String(langs[i]).split('-')[0].toLowerCase()
      if (codes.indexOf(code) !== -1) locale = code
    }
  }
  if (locale && locale !== '${defaultLocale}') location.replace(base + locale + '/' + location.search + location.hash)
})()`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/icon', '@nuxtjs/i18n'],

  i18n: {
    baseUrl: 'https://qsos.org',
    defaultLocale,
    strategy: 'prefix_except_default',
    trailingSlash: true,
    locales,
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: localeCookie,
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
    baseURL,
    head: {
      title: 'Eclipse QSOS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'QSOS - Qualification and Selection of Open Source Software' }
      ],
      script: [
        { innerHTML: localeRedirectScript, tagPosition: 'head', tagPriority: 'critical' }
      ],
      // app.head links are not prefixed with baseURL, so do it here
      link: [
        { rel: 'icon', href: `${baseURL}favicon.ico`, sizes: '48x48' },
        { rel: 'icon', href: `${baseURL}favicon.svg`, type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: `${baseURL}apple-touch-icon.png` },
        { rel: 'manifest', href: `${baseURL}site.webmanifest` }
      ]
    }
  }
})
