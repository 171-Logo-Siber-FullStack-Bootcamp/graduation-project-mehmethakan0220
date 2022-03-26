import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import header from '@/components/Header';
import search from '@/components/SearchBar';
import footer from '@/components/Footer';


const app = createApp(App);
app.use(router);

app.component('header-comp', header);
app.component('navbar-comp',search);
app.component('footer-comp', footer);

app.mount('#app');

