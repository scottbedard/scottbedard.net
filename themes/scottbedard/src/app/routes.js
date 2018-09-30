//
// layouts
//
import splashComponent from '@/layouts/splash.vue';

//
// routes
// note that all routes must be named, otherwise they may not mount correctly
//
export default [
    //
    // home
    //
    {
        component: () => import('@/pages/home/home.vue' /* webpackChunkName: 'home' */),
        meta: {
            layout: splashComponent,
        },
        name: 'home',
        path: '/',
    },

    //
    // skills
    //
    {
        component: () => import('@/pages/skills/skills.vue' /* webpackChunkName: 'skills' */),
        name: 'skills',
        path: '/skills',
    },
];
