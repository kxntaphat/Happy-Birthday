import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/Happy-Birthday/', // 👈 เพิ่มบรรทัดนี้
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  
>>>>>>> dfe7ca04f3c92f170ba9eb4a6105e213161b7637
})
