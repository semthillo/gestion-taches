import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // Si tu utilises Vue Router

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router); // Si tu utilises Vue Router

app.mount('#app');

