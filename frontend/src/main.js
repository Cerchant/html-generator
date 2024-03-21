import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

// import 'bootstrap/dist/css/bootstrap.css';
// import Bootstrap from 'bootstrap/dist/js/bootstrap.esm';
// Vue.use(Bootstrap);
import 'bootstrap/dist/js/bootstrap.js';

import Vue from 'vue';
import VueDragResize from 'vue-drag-resize';

Vue.component('vue-drag-resize', VueDragResize)


createApp(App).mount('#app')
