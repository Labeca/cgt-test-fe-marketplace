import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
    plugins: [react({}), vanillaExtractPlugin()],
    publicDir: './public',
    root: './',
    build: {
        outDir: './dist',
    },
    server: {
        host: '127.0.0.1',
        port: 8000,
    },
    resolve: {
        alias: {
            '@project_types': path.resolve(__dirname, 'src/common/types'),
            '@hooks': path.resolve(__dirname, 'src/common/hooks'),
            '@mocks': path.resolve(__dirname, 'src/common/mocks'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@pages': path.resolve(__dirname, 'src/pages'),
        }
    }
})