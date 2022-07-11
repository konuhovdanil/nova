import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

const app = createApp(App)

app.use(store)
app.mount('#app')
