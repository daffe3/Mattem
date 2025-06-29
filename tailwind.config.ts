import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'primary': '#87CEEB', 
        'secondary': '#282828', 
        'accent': '#f0f0f0', 
        'background': '#1a1a1a', 
        'surface': '#333333', 
      }
    }
  },
  plugins: [],
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ]
}