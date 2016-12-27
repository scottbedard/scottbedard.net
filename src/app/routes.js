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
        component: resolve => {
            require.ensure('src/pages/experiments/cube/cube', () => resolve(require('src/pages/experiments/cube/cube')));
        },
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
    // Skills
    //
    {
        path: '/skills',
        component: resolve => {
            require.ensure('src/pages/skills/skills', () => resolve(require('src/pages/skills/skills')));
        },
        meta: {
            title: 'Skills',
            subtitle: 'skills',
        },
    },

    //
    // 404
    //
    {
        path: '*',
        component: require('src/pages/404'),
        meta: {
            header: false,
            title: '404',
        },
    },
];
