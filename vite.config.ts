import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [tsconfigPaths()],
      server: {
        open: true,
        host: 'localhost',
        port: 3000,
      },
      clearScreen: false,
    };
  } else {
    return {
      plugins: [tsconfigPaths()],
      build: {
        outDir: 'dist',
        minify: 'terser',
        sourcemap: true,
      },
    };
  }
});
