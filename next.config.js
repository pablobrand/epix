module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'Cybermonkeys website with Next.js',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://cybermonkeys-nextjs.vercel.app',
      title: 'Cybermonkeys website with Next.js',
      description: 'Cybermonkeys website with Next.js',
      socialPreview: '/images/preview.png',
    },
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
