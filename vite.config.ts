import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
  /*
    'import.meta.env': process.env,
    'process.env' : process.env,
    'VITE_OPENWEATHERMAP_KEY': import.meta.env.VITE_OPENWEATHERMAP_KEY,
  */
  }
})
