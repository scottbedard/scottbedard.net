import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    component: () => import('./pages/Home.vue'),
    name: 'home',
    path: '/'
  }
]