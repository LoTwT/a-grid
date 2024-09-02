import type { ComponentResolver } from "unplugin-vue-components"

const components = ["AGrid", "a-grid", "AGridItem", "a-grid-item"]

export function AGridResolver(): ComponentResolver {
  return {
    type: "component",
    resolve: (name) => {
      if (components.includes(name)) {
        return {
          name,
          from: "a-grid",
        }
      }
    },
  }
}

export default AGridResolver
