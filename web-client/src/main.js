import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import header from '@/components/Header';
import search from '@/components/SearchBar';
import footer from '@/components/Footer';


const app = createApp(App);
app.use(router);
app.use(store);
app.component('header-comp', header);
app.component('search-comp',search);
app.component('footer-comp', footer);

app.mount('#app');

