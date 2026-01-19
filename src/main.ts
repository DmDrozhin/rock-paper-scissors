import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './styles/main.scss';
import { vRipple } from '@/directives/ripple';

const app = createApp(App);

app.use(createPinia());

app.directive('ripple', vRipple);

app.mount('#app');
