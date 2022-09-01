import { defineNuxtConfig } from 'nuxt'
import { VitePWA } from 'vite-plugin-pwa'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'description', content: '扫点场所码' },
        { name: 'theme-color', content: '#FFFFFF' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'mask-icon', href: '/mask-icon.svg', color: '#FFFFFF' }
      ]
    }
  },
  experimental: {
    externalVue: true
  },
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico',
          'apple-touch-icon.png',
          'masked-icon.svg',
          'android-chrome-192x192.png',
          'android-chrome-512x512.png'
        ],
        manifest: {
          name: '扫点场所码',
          short_name: '扫点场所码',
          description: '扫点场所码',
          theme_color: '#FFFFFF',
          lang: 'zh-CN',
          icons: [
            {
              src: 'android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ]
  }
})
