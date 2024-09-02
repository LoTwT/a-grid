import { createApp } from "vue"
import AGridPlugin from "a-grid"
import App from "./App.vue"

const app = createApp(App)

app.use(AGridPlugin)

app.mount("#app")
