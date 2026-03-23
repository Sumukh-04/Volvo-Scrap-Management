import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType:'autoUpdate',

      manifest:{
        name:'VOLVO-SCRAP-MANAGEMENT',
        short_name:'VOLVO-SMD',
        description:"scrap management, tracking and approvals on the shop floor",
        theme_color:"#202A44",
        background_color:"#F8F7F7",
        display:'standalone',
        orientation:'landscape',
        start_url:'/',

        icons: [
                {
                  src: '/icons/Volvo-main-icon.png',
                  sizes: '192x192',
                  type: 'image/png'
                },
                {
                  src: '/icons/Volvo-main-icon.png',
                  sizes: '512x512',
                  type: 'image/png'
                }
              ]


      }
    })
  ],
})
