import { RouteRecordRaw } from 'vue-router';
import Home from './pages/Home.vue';

export const routes: RouteRecordRaw[] = [
  {
    component: Home,
    name: 'home',
    path: '/'
  },
  {
    component: () => import('./pages/Articles.vue'),
    name: 'articles',
    path: '/articles'
  },

  //
  // experiments
  //
  {
    component: () => import('./pages/experiments/CanvasRibbon.vue'),
    name: 'canvas-ribbon-experiment',
    path: '/experiments/canvas-ribbon'
  },
  {
    component: () => import('./pages/experiments/CssCube.vue'),
    name: 'css-cube-experiment',
    path: '/experiments/css-cube'
  },
]