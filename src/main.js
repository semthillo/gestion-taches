import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)


import { createApp } from 'vue'

import App from './App.vue'
app.use(pinia)
app.mount('#app')
