export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: 'Random Questions',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'user-scalable=no, width=device-width, initial-scale=1.0',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Random Questions',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/notification.js',
      mode: 'client',
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/pwa', '@nuxtjs/color-mode'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  pwa: {
    manifest: {
      name: 'Random Questions',
      lang: 'es',
      useWebmanifestExtension: false,
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
