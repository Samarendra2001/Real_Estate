import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',// this is bcz to connect the fronend to backend
        secure: false,//means when everytime api is called it will get back to our backend 3000 port to get and post data
      },
    },
  },
  plugins: [react()],
})
