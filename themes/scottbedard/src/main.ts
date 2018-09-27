//
// boot up our application
//
import './app/boot';

//
// import dependencies
//
import Vue from 'vue';
import VueRouter from 'vue-router';
import root from './root.vue';
import routes from './app/routes';
import store from './app/store/store';

//
// turn off the production tip, we know what we're doing
//
Vue.config.productionTip = false;

//
// instantiate a router
//
const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes,
});

//
// instantiate our application and mount it to the dom
//
new Vue({
    render: (h) => h(root),
    router,
    store,
}).$mount('#app');
