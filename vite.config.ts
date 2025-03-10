import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      minify: mode === 'production',
    },
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
    test: {
      environment: 'jsdom',
      mockReset: true,
      globals: true,
      setupFiles: './src/test/setup.ts',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html', 'json', 'lcov'],
      },
      outputFile: {
        junit: './junit.xml',
      },
      reporters: [
        'junit',
        'json',
        'verbose',
        ['vitest-sonar-reporter', { outputFile: './coverage/sonar-report.xml' }],
      ],
    },
  };
});
