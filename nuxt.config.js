import colors from './assets/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Thomas Lemmerz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bauingenieur | Softwareentwickler' },
      { name: 'format-detection', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/normalize.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '@/plugins/vuelayers.js',
    ssr: false,
    mode: 'client'
  }, {
    src: '@/plugins/ol.js',
    ssr: false,
    mode: 'client'
  }, {
    src: '@/plugins/vue-observe-visibility.js',
    ssr: false
  }, {
    src: '@/plugins/highcharts.js',
    ssr: false
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/i18n'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: false,
    theme: {
      dark: false,
      themes: {
        light: {
          // standard colors
          primary: colors.blue.base,
          accent: colors.red.base,
          secondary: colors.green.base,
          tertiary: colors.beige.base,
          info: colors.beige.base,
          warning: colors.red.base,
          error: colors.purple.base,
          success: colors.green.base,
          // custom colors
          background: colors.beige.base,
          day: colors.red.lighten_40,
          light: colors.green.lighten_50
        }
      }
    }
  },

  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    locales: [{
      code: 'de',
      name: 'Deutsch',
      iso: 'de-DE',
      file: 'de.json'
    }],
    defaultLocale: 'de',
    fallbackLocale: 'de',
    detectBrowserLanguage: {
      useCookie: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    loaders: {
      css: {
        modules: false
      }
    }
  }
}
