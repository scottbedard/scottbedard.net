//
// On your mark
//
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { redirects, routes } from 'app/routes';
import { config, before, after } from 'app/router';

Vue.use(VueRouter);
Vue.use(VueResource);
require('app/boot');

//
// Get set
//
let Router = new VueRouter(config);
Router.map(routes);
Router.redirect(redirects);
Router.beforeEach(before);
Router.afterEach(after);

//
// Go!
//
import Master from './app/master';
Router.start(Master, '#app');
