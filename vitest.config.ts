import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [tsconfigPaths(), vanillaExtractPlugin()],
  test: {
    environment: 'jsdom',
    globals: true,
    root: './',
    setupFiles: './src/setupTests.ts',
    alias: {
        '@project_types': path.resolve(__dirname, 'src/common/types'),
        '@hooks': path.resolve(__dirname, 'src/common/hooks'),
        '@mocks': path.resolve(__dirname, 'src/common/mocks'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@test': path.resolve(__dirname, 'src/test'),
    }
  },
})