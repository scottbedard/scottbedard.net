import Vue from 'vue';
import VueRouter from 'vue-router';
import RootComponent from './root';
import { before, after, routes } from './app/routes';

//
// Boot up our application
//
require('./app/boot');

//
// Configure the router
//
const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes,
});

router.beforeEach(before);
router.afterEach(after);

//
// Mount our application to the dom
//
/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    render: h => h(RootComponent),
});
