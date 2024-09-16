import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

if (process.env.NODE_ENV === 'production') {
  const baseElement = document.querySelector('base');
  if (baseElement) {
    baseElement.setAttribute('href', '/new-vue/');
  }
} else {
  //For gh pages.
  const baseElement = document.querySelector('base');
  if (baseElement) {
    baseElement.setAttribute('href', '/');
  }
}

const app = createApp(App);
app.use(router);
app.mount('#app');
