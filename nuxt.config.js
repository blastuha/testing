import envConfig from './env.config';
import i18nConfig from './i18n.config';
import routerConfig from './router.config';
import authConfig from './auth.config';

export default {
  head: {
    title: 'smart-tables',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicon/manifest.json' },

      {
        rel: 'preload',
        as: 'font',
        href: '/fonts/dripicons-v2.woff',
        type: 'font/woff',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        href: '/fonts/dripicons-v2.ttf',
        type: 'font/ttf',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        href: '/fonts/Nunito-Bold.ttf',
        type: 'font/ttf',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        as: 'font',
        href: '/fonts/Nunito-Regular.ttf',
        type: 'font/ttf',
        crossOrigin: 'anonymous',
      },
    ],
    scripts: [],
    bodyAttrs: {
      'data-layout': 'topnav',
    },
  },

  hooks: {
    'render:route': (url, result, context) => {
      console.log(`Рендеринг маршрута: ${url}`);
    },
    'render:routeDone': (url) => {
      console.log(`Маршрут завершен: ${url}`);
    },
    error: (error) => {
      console.log('Ошибка во время рендеринга:', error);
    },
  },

  loading: {
    color: '#0053A5',
    height: '4px',
  },

  css: ['@/assets/styles/main.scss'],

  styleResources: {
    scss: [],
  },

  plugins: [
    '~/plugins/axios',
    '~plugins/bootstrap',
    '~plugins/awesomplete',
    '~plugins/tooltip',
    '~plugins/nuxt-client-init.client.js',
    '~/plugins/logging.js',
    { src: '~plugins/v-calendar.js', ssr: false },
  ],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    'nuxt-i18n',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '53473642',
        webvisor: true,
        clickmap: true,
        // useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,
      },
    ],
  ],

  axios: {
    proxyHeaders: true,
    proxy: true,
  },

  env: envConfig,
  i18n: i18nConfig,
  router: routerConfig,
  auth: authConfig,

  build: {
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    },
  },
};
