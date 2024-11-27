// vite.config.js
import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                waitlist: resolve(__dirname, 'waitlist/index.html'),
            },
        },
    },
})