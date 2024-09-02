import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import AGridResolver from "@ayingott/a-grid/resolver"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: "./src/components.d.ts",
      resolvers: [AGridResolver()],
    }),
  ],
})
