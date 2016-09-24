import RouterState from 'src/state/router';
import HomeComponent from 'src/pages/home';
import NotFoundComponent from 'src/pages/404';

//
// Before route
//
exports.before = function (route, redirect, next) {
    document.title = typeof route.meta.title === 'string'
        ? `Scott Bedard :: ${ route.meta.title }`
        : 'Scott Bedard';

    next();
};

//
// After route
//
exports.after = function (route) {
    RouterState.setCurrentRoute(route);
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
            title: 'Home',
        },
    },

    //
    // 404
    //
    {
        path: '*',
        component: NotFoundComponent,
        meta: {
            title: '404',
        },
    },
];
