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
    base: '/',
    mode: 'history',
    routes,
});

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
    render: h => h(rootComponent),
    router,
    store,
}).$mount('#app');
