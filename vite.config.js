import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs'
import path from 'node:path'

// Plugin personnalisé pour permettre à l'interface d'administration
// de sauvegarder directement les modifications du JSON sur votre disque local pendant npm run dev.
const saveJsonPlugin = {
  name: 'save-json-plugin',
  configureServer(server) {
    server.middlewares.use('/api/save-json', (req, res) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const targetPath = path.resolve(__dirname, 'src/data/portfolio.json');
            fs.writeFileSync(targetPath, body, 'utf-8');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: e.message }));
          }
        });
      } else {
        res.statusCode = 405;
        res.end();
      }
    });
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    saveJsonPlugin
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
