import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from a /<repo-name>/ subpath rather
  // than the domain root, so production builds need every asset URL and
  // router path prefixed with it. Local dev keeps the root path.
  base: process.env.GITHUB_PAGES ? '/Nana-kaJobe-Catering-Baking/' : '/',
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
