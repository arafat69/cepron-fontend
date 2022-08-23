// import axios from 'axios'
import i18n from './config/i18n'
export default {
  mode: 'universal',
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cepron',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persistedstate.js', ssr: false },
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    [
      '@nuxtjs/i18n',
      {
        vueI18nLoader: true,
        skipSettingLocaleOnNavigate: true,
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'English',
          },
          {
            code: 'it',
            name: 'Italian',
          },
          {
            code: 'bn',
            name: 'বাংলা',
          },
        ],
        vueI18n: i18n,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/sitemap', // This should be the last item always.
  ],

  sitemap: {
    hostname: 'https://www.cepron.org/api',
    exclude: ['/my-courses', '/dashboard', '/otp', 'settings'],
    // routes: async () => {
    //   const { data } = await axios.get('http://cepron-core.test/api/courses')
    //   return data.data.courses.map((course) => `/courses/${course.id}`)
    // },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://www.cepron.org/api',
  },
  toast: {
    position: 'bottom-right', // message will display at the bottom right corner of the screen
    duration: 5000, // display message for five second
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: { compact: true },
  },

  fontawesome:{
    icons: {
      solid: true,
      brands: true,
    }
  }
}
