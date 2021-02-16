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
  }
]