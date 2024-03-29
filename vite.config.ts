import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/hp/",
  server: {
    port: 3000,
    watch: {
      usePolling: true //required by WSL2
    }
  }
})
