import type { Plugin } from "vue"
import AGridItem from "./components/grid-item.vue"
import AGrid from "./components/grid.vue"

export { AGrid, AGridItem }

const AGridPlugin: Plugin = {
  install(app) {
    app.component(AGrid.name!, AGrid)
    app.component(AGridItem.name!, AGridItem)
  },
}

export default AGridPlugin
