import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import SetupView from '@/views/SetupView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/setup',
    name: 'setup',
    component: SetupView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
