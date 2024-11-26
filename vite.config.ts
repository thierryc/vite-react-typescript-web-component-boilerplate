import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // Modern browsers support
    minify: true,     // Minify for production
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]', // Organize assets
      },
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
