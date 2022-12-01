import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // src: require('path').resolve(__dirname, 'src/')
      'src' : path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components')
    }
  },
  plugins: [vue()],
  server: {
    port: 8080,
    open: true,
  },
  build: {
    outDir: '../neo-template-dist'
  }
})
