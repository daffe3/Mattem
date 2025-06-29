export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue','@nuxtjs/tailwindcss',], 

  primevue: {
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities', 
    options: {
      unstyled: false, 
      ripple: true, 
    },
    components: {
      prefix: 'Prime', 
      include: ['Button', 'Card', 'InputText', 'Toast', 'Message', 'Divider'] 
    },
    directives: {
      include: ['Tooltip', 'Ripple']
    },
  },

  css: [
    'primevue/resources/themes/lara-dark-blue/theme.css',
    'primevue/resources/primevue.min.css', 
    'primeicons/primeicons.css', 
  ],

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' },
      ]
    }
  }
})