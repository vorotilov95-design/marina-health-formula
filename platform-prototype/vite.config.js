import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/formula-zdorovya/platform/',
  build: {
    outDir: '../platform',
    emptyOutDir: true,
  },
  plugins: [react()],
})
