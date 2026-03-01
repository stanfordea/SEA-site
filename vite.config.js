import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        manifesto: resolve(__dirname, 'manifesto.html'),
        community: resolve(__dirname, 'community.html'),
        ea: resolve(__dirname, 'ea.html'),
        careerAccelerator: resolve(__dirname, 'career-accelerator.html'),
        projectIncubator: resolve(__dirname, 'project-incubator.html'),
      },
    },
  },
})
