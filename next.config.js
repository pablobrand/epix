module.exports = {
<<<<<<< HEAD
  images: {
    loader: 'imgix',
    path: '',
    domains: ['https://gateway.pinata.cloud/ipfs']
  }
}
=======
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
>>>>>>> 841d0728d8b4dc216f8b060f61a038169482f8a7
