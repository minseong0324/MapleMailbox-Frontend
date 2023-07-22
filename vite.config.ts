import {defineConfig} from 'vite';
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), ],
  resolve: {
    alias: {
      '@vitejs/plugin-react': '@vitejs/plugin-react/dist/index.es.js'
    }
  },
  server: { 
    open: true, 
    port: 3000, 
  },
  define: { global: 'window' },
});
