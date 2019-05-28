/* eslint-disable no-new */

//
// import dependencies
//
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';

import modules from './app/store';
import rootComponent from './root.vue';
import routes from './app/routes';
import { beforeEach, afterEach } from './app/guards';

//
// boot up our application
//
import './app/boot';

//
// turn off the production tip, we know what we're doing
//
Vue.config.productionTip = false;

//
// create a router
//
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

router.beforeEach(beforeEach);
router.afterEach(afterEach);

//
// create a store
//
const store = new Vuex.Store({
    modules,
    strict: process.env.NODE_ENV !== 'production',
});

//
// sync the store and router
//
sync(store, router);

//
// instantiate our application and mount it to the dom
//
new Vue({
    data() {
        return {
            height: window.innerHeight,
            width: window.innerWidth,
        };
    },
    mounted() {
        window.addEventListener('resize', this.onResize);
    },
    render(h) {
        return h(rootComponent);
    },
    el: '#app',
    methods: {
        onResize() {
            this.height = window.innerHeight;
            this.width = window.innerWidth;
        },
    },
    router,
    store,
});
