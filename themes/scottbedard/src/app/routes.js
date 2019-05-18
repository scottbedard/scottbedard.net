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
            headerRoute: {
                name: 'blog',
            },
        },
        name: 'blog',
        path: '/blog',
    },

    {
        component: () => import('@/pages/blog/post/post.vue' /* webpackChunkName: 'blog-post' */),
        meta: {
            header: 'blog',
            headerRoute: {
                name: 'blog',
            },
        },
        name: 'blog-post',
        path: '/blog/:slug',
    },

    //
    // contact
    //
    {
        component: () => import('@/pages/contact/contact.vue' /* webpackChunkName: 'contact' */),
        meta: {
            header: 'contact',
            headerRoute: {
                name: 'contact',
            },
        },
        name: 'contact',
        path: '/contact',
    },

    {
        component: () => import('@/pages/contact/done/done.vue' /* webpackChunkName: 'contact' */),
        meta: {
            header: 'contact',
            headerRoute: {
                name: 'contact',
            },
        },
        name: 'contact-done',
        path: '/contact/done',
    },

    //
    // experiments
    //
    {
        component: () => import('@/pages/experiments/experiments.vue' /* webpackChunkName: 'experiments' */),
        meta: {
            header: 'experiments',
            headerRoute: {
                name: 'experiments',
            },
        },
        name: 'experiments',
        path: '/experiments',
    },

    {
        component: () => import('@/pages/experiments/cube/cube.vue' /* webpackChunkName: 'cube' */),
        meta: {
            header: 'experiments',
            headerRoute: {
                name: 'experiments',
            },
        },
        name: 'cube',
        path: '/cube',
    },

    {
        component: () => import('@/pages/experiments/heatmap/heatmap.vue' /* webpackChunkName: 'heatmap' */),
        meta: {
            header: 'experiments',
            headerRoute: {
                name: 'experiments',
            },
        },
        name: 'svelte-heatmap',
        path: '/svelte-heatmap',
    },

    {
        component: () => import('@/pages/experiments/ribbon/ribbon.vue' /* webpackChunkName: 'ribbon' */),
        meta: {
            header: 'experiments',
            headerRoute: {
                name: 'experiments',
            },
        },
        name: 'canvas-ribbon',
        path: '/canvas-ribbon',
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
            headerRoute: {
                name: 'skills',
            },
        },
        name: 'retiredSkills',
        path: '/skills/retired',
    },

    //
    // skills
    //
    {
        component: () => import('@/pages/skills/skills.vue' /* webpackChunkName: 'skills' */),
        meta: {
            header: 'skills',
            headerRoute: {
                name: 'skills',
            },
        },
        name: 'skills',
        path: '/skills',
    },
];
