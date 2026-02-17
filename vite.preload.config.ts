import { defineConfig } from 'vite'

// https://vitejs.dev/config
export default defineConfig({
  build: {
    lib: {
      formats: ['cjs'],
      entry: './src/preload/preload.ts',
      fileName: 'preload',
    },
  },
})
