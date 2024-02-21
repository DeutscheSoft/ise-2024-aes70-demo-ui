import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa"
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// Note that there is a progressive webApp feature, allowing Chrome to install the 'site' as a single page App.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({      
      manifest: {
        "icons": [
          { 
            "src": "/icons/192.png", 
            "type": "image/png", 
            "sizes": "192x192",
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          },
          { 
            "src": "/icons/512.png", 
            "type": "image/png", 
            "sizes": "512x512"
          }
        ]
      }
    })
  ]
})
