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
  css: ['@/assets/css/main.css'],
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

  buildModules: ['@nuxtjs/pwa', '@nuxtjs/color-mode'],

  modules: ['@nuxtjs/axios', '@nuxt/content'],

  pwa: {
    manifest: {
      name: 'Random Questions',
      lang: 'es',
      useWebmanifestExtension: false,
    },
  },

  axios: {},

  build: {},
}
