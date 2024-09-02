import type { Plugin } from "vue"
import AGrid from "./components/grid.vue"
import AGridItem from "./components/grid-item.vue"

export { AGrid, AGridItem }

const AGridPlugin: Plugin = {
  install(app) {
    app.component(AGrid.name!, AGrid)
    app.component(AGridItem.name!, AGridItem)
  },
}

export default AGridPlugin
