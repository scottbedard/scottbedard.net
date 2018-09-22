import { RouteConfig } from 'vue-router';

//
// routes
//
const routes: RouteConfig[] = [
    //
    // home
    //
    {
        component: () => import('@/pages/home/home.vue' /* webpackChunkName: "home" */),
        name: 'home',
        path: '/',
    },

    //
    // skills
    //
    {
        component: () => import('@/pages/skills/skills.vue' /* webpackChunkName: "skills" */),
        name: 'skills',
        path: '/skills',
    },
];

export default routes;
