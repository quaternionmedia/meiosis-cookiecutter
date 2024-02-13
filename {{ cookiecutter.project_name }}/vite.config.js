/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: {{ cookiecutter.dev_server_port }},
    host: '0.0.0.0',
    watch: {
    usePolling: true
},
    },
    root: 'app',
    build: {
    outDir: 'dist'
}
})
