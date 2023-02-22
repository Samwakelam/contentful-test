/// <reference types="vitest" />

import { ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig((_: ConfigEnv) => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        // {
        //   find: /(.*).service/,
        //   replacement: isDevelop ? '$1.mock' : '$1.service',
        // },
      ],
    },
    // @ts-ignore
    test: {
      globals: true,
      environment: 'jsdom',
      // includeSource: ['lib/**/*.{ts}'],
    },
  };
});
