import path from "node:path"
import type { Plugin } from "vite"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Dts from "vite-plugin-dts"
import MagicString from "magic-string"
import fg from "fast-glob"

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ["vue", "vitest"],
      dts: true,
    }),
    Dts({
      tsconfigPath: "./tsconfig.lib.json",
      cleanVueFileName: true,
    }),
    VitePluginInlineCSS(),
  ],
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
        resolver: "src/resolver.ts",
        ...fg
          .sync("src/components/*.vue")
          .reduce<Record<string, string>>((res, filePath) => {
            const name = path.basename(filePath, ".vue")
            res[`components/${name}`] = filePath
            return res
          }, {}),
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
        exports: "named",
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name?.endsWith(".css")) {
            return "components/[name][extname]"
          }
          return "assets/[name]-[hash][extname]"
        },
      },
    },
  },
  test: {
    clearMocks: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      include: ["src/components/**/*.vue"],
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
