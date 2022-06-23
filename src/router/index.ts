import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import SetupView from '@/views/SetupView.vue';
import GameView from '@/views/GameView.vue';

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
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
