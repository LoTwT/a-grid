import AGridResolver from "@ayingott/a-grid/resolver"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import { defineConfig } from "vite"

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
