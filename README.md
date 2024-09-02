# @ayingott/a-grid

[![@ayingott/a-grid](https://img.shields.io/npm/v/@ayingott/a-grid.svg)](https://npmjs.com/package/@ayingott/a-grid)

Grid components for web development based on the CSS Grid and Vue.

## Installation

```bash
pnpm add @ayingott/a-grid
```

## Usage

### Full Import

```ts
// main.ts
import { createApp } from "vue"
import AGrid from "@ayingott/a-grid"
import App from "./App.vue"

const app = createApp(App)

app.use(AGrid)
app.mount("#app")
```

#### Volar Support

If using Volar and full import, you can add the global component type definition to `compilerOptions.types` in `tsconfig.json`.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@ayingott/a-grid/global"]
  }
}
```

### Auto Import

`@ayingott/a-grid` provides a resolver so that you can use `unplugin-vue-components` to auto import components.

```bash
pnpm add -D unplugin-vue-components
```

```ts
// vite.config.ts
import { defineConfig } from "vite"
import Components from "unplugin-vue-components/vite"
import AGridResolver from "@ayingott/a-grid/resolver"

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [AGridResolver()],
    }),
  ],
})
```

## LICENSE

[MIT](./LICENSE)
