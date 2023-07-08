import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: 'localhost',
    headers: {
      'Cache-Control': 'no-store',
    },
    shortcuts: [
      // built-in usage: r u o c q
      {        
        key: 'f',
        description: 'server --info--> client',
        action(server) {
          if ('ws' in server) {
            server.ws.send('custom.msg', 'info from dev-cli')
          }
        }
      }
    ]
  },
  build: {
    //speed up build
    minify: false,
    target: 'esnext',
  },
})
