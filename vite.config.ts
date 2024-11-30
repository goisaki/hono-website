import { defineConfig } from "vite"
import honox from "honox/vite"
import build from "@hono/vite-build/cloudflare-pages"
import adapter from "@hono/vite-dev-server/cloudflare"

export default defineConfig({
  plugins: [
    honox({ devServer: { adapter } }),
    build(),
  ]
})