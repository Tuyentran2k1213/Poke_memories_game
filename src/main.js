import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';

document.title = 'Memories game';


createApp(App).use(router).mount('#app');
