import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolvePath } from 'react-router-dom'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build : {
    rollupOptions :{
      input: {
        main: resolve(__dirname, 'index.html'), 
        Ceaser: resolve(__dirname, 'src/CeaserCipher.html'),
        PlayFair: resolve(__dirname, 'src/PlayFairCipher.html'),
        Vigenere: resolve(__dirname, 'src/VigenereCipher.html'),
        Hill: resolve(__dirname, 'src/HillCipher.html')        
      }
    }
  }
})
