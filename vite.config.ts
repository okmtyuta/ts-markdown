import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'index',
      fileName: 'index'
    }
  },
  plugins: [react()]
})
