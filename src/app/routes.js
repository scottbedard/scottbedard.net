import RouterState from 'src/state/router';

import CubeComponent from 'src/pages/cube/cube';
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
        path: '/cube',
        component: CubeComponent,
        meta: {
            title: 'CSS Cube',
            subtitle: 'CSS Cube',
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
