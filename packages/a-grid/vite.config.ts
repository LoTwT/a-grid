import path from "node:path"
import type { Plugin } from "vite"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import autoImport from "unplugin-auto-import/vite"
import dts from "vite-plugin-dts"
import MagicString from "magic-string"

export default defineConfig({
  plugins: [
    vue(),
    autoImport({ imports: ["vue"], dts: "./src/types/auto-imports.d.ts" }),
    dts({ tsconfigPath: "./tsconfig.lib.json" }),
    VitePluginInlineCSS(),
  ],
  build: {
    lib: {
      name: "a-grid",
      entry: {
        index: "src/index.ts",
      },
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        // preserveModules: true,
        format: "es",
      },
    },
  },
})

function VitePluginInlineCSS(): Plugin {
  return {
    name: "vite:inline-css",
    apply: "build",
    enforce: "post",
    renderChunk: (code, chunk) => {
      if (!chunk.viteMetadata) return
      const { importedCss } = chunk.viteMetadata

      if (importedCss.size === 0) return

      const ms = new MagicString(code)

      for (const cssFileName of importedCss) {
        let cssFilePath = path
          .relative(path.dirname(chunk.fileName), cssFileName)
          .replaceAll(/[/\\]+/g, "/")
        cssFilePath = cssFilePath.startsWith(".")
          ? cssFilePath
          : `./${cssFilePath}`
        ms.prepend(`import '${cssFilePath}';\n`)
      }

      return {
        code: ms.toString(),
        map: ms.generateMap(),
      }
    },
  }
}
