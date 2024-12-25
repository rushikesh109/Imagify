import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: parseInt(process.env.VITE_PORT) || 5173, // Default to 5173
},
  plugins: [react()],
})
