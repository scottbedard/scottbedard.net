import RouterState from 'src/state/router';

//
// Before route
//
exports.before = function (route, redirect, next) {
    document.title = typeof route.meta.title === 'string'
        ? `scottbedard / ${ route.meta.title.toLowerCase() }`
        : 'scottbedard';

    next();
};

//
// After route
//
exports.after = function (route) {
    RouterState.setCurrentRoute(route);
    RouterState.setSubtitle(route.meta.subtitle);
};

//
// Routes
//
exports.routes = [

    //
    // Blog
    //
    {
        path: '/blog',
        component: r => require.ensure('src/pages/blog/blog', () => r(require('src/pages/blog/blog')), 'blog'),
        children: [
            {
                path: '',
                name: 'blog.posts',
                component: r => require.ensure('src/pages/blog/posts/posts', () => r(require('src/pages/blog/posts/posts')), 'blog'),
                meta: {
                    title: 'Blog',
                    subtitle: 'blog',
                },
            },
            {
                component: r => require.ensure('src/pages/blog/post/post', () => r(require('src/pages/blog/post/post')), 'blog'),
                name: 'blog.post',
                path: ':slug',
            },
        ],
    },

    { path: '/thoughts', redirect: '/blog' },
    { path: '/thoughts/*', redirect: '/blog' },

    //
    // Canvas-ribbon
    //
    {
        path: '/canvas-ribbon',
        component: require('src/pages/experiments/canvas_ribbon/canvas_ribbon'),
        meta: {
            title: 'Canvas ribbon',
            subtitle: 'canvas-ribbon',
        },
    },

    //
    // Contact
    //
    {
        path: '/contact',
        component: require('src/pages/contact/contact'),
        meta: {
            title: 'Contact',
            subtitle: 'Contact',
        },
    },

    //
    // Cube
    //
    {
        path: '/cube',
        component: resolve => require(['src/pages/experiments/cube/cube'], resolve),
        meta: {
            title: 'CSS Cube',
            subtitle: 'CSS Cube',
        },
    },

    //
    // Experiments
    //
    {
        path: '/experiments',
        component: require('src/pages/experiments/experiments'),
        meta: {
            title: 'Experiments',
            subtitle: 'experiments',
        },
    },

    //
    // Home
    //
    {
        path: '/',
        component: require('src/pages/home'),
        meta: {
            header: false,
            title: 'Home',
        },
    },

    //
    // Skills
    //
    {
        path: '/skills',
        component: resolve => require(['src/pages/skills/skills'], resolve),
        meta: {
            title: 'Skills',
            subtitle: 'skills',
        },
    },

    //
    // 500
    //
    {
        path: '/error',
        name: '500',
        component: require('src/pages/500'),
    },

    //
    // 404
    //
    {
        path: '*',
        name: '400',
        component: require('src/pages/404'),
        meta: {
            header: false,
            title: '404',
        },
    },
];
