import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://arjunvijay03.github.io/todolistapp",
  plugins: [react()],
  server:{
    port:3000
  }
})
