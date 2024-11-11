export default {
  locales: [
    {
      code: 'ru',
      file: 'ru.js',
      flag: 'flag-ru',
      name: 'Russian'
    },
    // {
    //   code: 'en',
    //   file: 'en.js',
    //   flag: 'flag-us',
    //   name: 'English'
    // }
  ],
  lazy: true,
  langDir: '~/lang',
  defaultLocale: 'ru',
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: 'ru',
    silentFallbackWarn: true
  }
};
