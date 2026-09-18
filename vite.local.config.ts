// ローカルで index.html をダブルクリックしてそのまま見るための設定。
// 通常の `npm run build`（vite.config.ts）とは別に、
// ・ES Modules ではなく通常の<script>として読み込めるIIFE形式で出力
// ・JS/CSSをそれぞれ1ファイルに、わかりやすいファイル名で出力
// ・minify無しで、コードをある程度読める状態のまま出力
// することで、file:// で開いても動くようにしています。
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist-local',
    cssCodeSplit: false,
    minify: false,
    target: 'es2018',
    rollupOptions: {
      input: path.resolve(import.meta.dirname, 'index.html'),
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/app.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'assets/style.css'
          return 'assets/[name][extname]'
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
