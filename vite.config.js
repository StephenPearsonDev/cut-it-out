import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TbRulerMeasure } from 'react-icons/tb'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  }
})
