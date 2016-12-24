import RouterState from 'src/state/router';

import HomeComponent from 'src/pages/home';
import NotFoundComponent from 'src/pages/404';

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
        component: HomeComponent,
        meta: {
            header: false,
            title: 'Home',
        },
    },

    //
    // Cube
    //
    {
        // const Foo = resolve => {
        //   // require.ensure is Webpack's special syntax for a code-split point.
        //   require.ensure(['./Foo.vue'], () => {
        //     resolve(require('./Foo.vue'))
        //   })
        // }
        path: '/cube',
        component: resolve => {
            require.ensure(['src/pages/cube/cube'], () => {
                resolve(require('src/pages/cube/cube'));
            });
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
    // 404
    //
    {
        path: '*',
        component: NotFoundComponent,
        meta: {
            header: false,
            title: '404',
        },
    },
];
