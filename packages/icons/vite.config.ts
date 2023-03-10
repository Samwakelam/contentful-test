/// <reference types="vitest" />

import { ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as process from 'process';

// https://vitejs.dev/config/

export default defineConfig((_: ConfigEnv) => {
  // const isDevelop = ['development'].includes(
  //   process.env.NODE_ENV ?? 'development'
  // );

  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: /(.*).service/,
          replacement: '$1.mock',
        },
      ],
    },
    // @ts-ignore
    test: {
      globals: true,
      environment: 'jsdom',
      includeSource: ['lib/**/*.{ts}'],
    },
  };
});
