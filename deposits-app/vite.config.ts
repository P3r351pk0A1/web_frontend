import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/deposits_frontend",
  server: {
    host: '192.168.43.190', 
    port: 5173,
    proxy: {
      "/api": {
        target: "http://192.168.43.190:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  },
  plugins: [react()],
})