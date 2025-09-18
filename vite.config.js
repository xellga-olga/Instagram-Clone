import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/random': {
        target: 'https://www.randomnumberapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/random/, '/api/v1.0/random'),
      },
    },
  },
})