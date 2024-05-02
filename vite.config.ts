import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer() as PluginOption],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      pages: path.resolve(__dirname, "./src/screens"),
      styles: path.resolve(__dirname, "./src/styles"),
    },
  },
})
