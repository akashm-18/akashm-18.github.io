import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://main--whimsical-haupia-8e3c02.netlify.app/',
  plugins: [react()],
})
