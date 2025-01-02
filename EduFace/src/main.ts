import './css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

export {app}
app.use(router)

app.mount('#app')
