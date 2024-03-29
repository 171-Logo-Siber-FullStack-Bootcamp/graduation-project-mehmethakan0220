import { createRouter, createWebHistory } from 'vue-router';
import App from '../src/App.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: App
    },
    {
      path: '/api',
      name: 'Api',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  export default router