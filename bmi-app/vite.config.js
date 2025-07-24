// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 4173, // optional
    host: true,
    allowedHosts: ['bmi-tracker-pk2b.onrender.com']
  }
})
