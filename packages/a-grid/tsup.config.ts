import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["./src/resolver.ts"],
  format: ["esm", "cjs"],
  target: "esnext",
  clean: true,
  cjsInterop: true,
  dts: true,
  splitting: true,
  tsconfig: "./tsconfig.resolver.json",
})
