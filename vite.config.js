import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor_react';
            }
            if (id.includes('tailwindcss')) {
              return 'vendor_tailwindcss';
            }
            return 'vendor';
          }
        }
      }
    }
  }
})
