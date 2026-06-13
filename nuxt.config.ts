export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    output: {
      publicDir: 'out',
    },
    prerender: {
      crawlLinks: true,
    },
  },
  routeRules: {
    '/**': { prerender: true },
  },
  app: {
    head: {
      title: 'Guide Auto Tunisie',
      meta: [
        { name: 'description', content: 'Le guide automobile de référence en Tunisie - Prix, cotes, comparateur et actualités auto' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
      ],
    },
  },
})
