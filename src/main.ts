import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './assets/main.css'
import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
