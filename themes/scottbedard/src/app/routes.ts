import defaultLayout from '@/layouts/default.vue';
import { RouteConfig } from 'vue-router';

//
// routes
//
const routes: RouteConfig[] = [
    //
    // default layout
    //
    {
        children: [
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
        ],
        component: defaultLayout,
        path: '',
    },
];

export default routes;
