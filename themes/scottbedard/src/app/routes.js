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
    // blog
    //
    {
        component: () => import('@/pages/blog/blog.vue' /* webpackChunkName: 'blog' */),
        meta: {
            header: 'blog',
        },
        name: 'blog',
        path: '/blog',
    },

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
    // retired skills
    //
    {
        component: () => import('@/pages/retired_skills/retired_skills.vue' /* webpackChunkName: 'retiredSkills' */),
        meta: {
            header: 'skills',
        },
        name: 'retiredSkills',
        path: '/skills/retired',
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
