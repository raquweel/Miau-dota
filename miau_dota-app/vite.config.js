import { defineConfig } from 'vite'

export default defineConfig({
    base: '/miau-dota/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
            }
        }
    }
})