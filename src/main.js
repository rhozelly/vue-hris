import './assets/main.css'

import { createApp } from 'vue'
import MainApp from './App.vue'
import router from './router'


const app = createApp(MainApp)
app.use(router)

app.mount('#app')
