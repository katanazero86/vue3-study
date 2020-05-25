import { createApp } from 'vue';
import App from './App.vue';

// vuex
import { store } from './store/index';

const app = createApp(App);
app.use(store);

// createApp(App).mount('#app');
app.mount(`#app`);
