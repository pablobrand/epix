module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'Cyber Monkeys LLC',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://cybermonkeys-nextjs.vercel.app',
      title: 'Cyber Monkeys LLC',
      description: 'Cyber Monkeys LLC, Web, Digital, Video and Blockchain Solutions',
      socialPreview: '/images/preview.png',
    },
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
