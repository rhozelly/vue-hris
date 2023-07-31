import './assets/main.css'

import { createApp } from 'vue'
import MainApp from './App.vue'
import router from './router'

import './style.css';
import store from './store';

const app = createApp(MainApp)
app.use(router).use(store)


app.mount('#app')
