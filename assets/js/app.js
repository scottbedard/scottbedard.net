//
// Set up Vue
//
import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

//
// Import global components, directives, and filters
//
import './components/ribbon/ribbon';
import './components/spinner/spinner';
import './components/typewriter/typewriter';
import './app/directives/infiniteScroll';
import './app/filters/moment';

//
// Set up the router
//
let Router = new VueRouter(config);

import { config, before, after } from './app/router';
import { redirects, routes } from './app/routes';

Router.map(routes);
Router.redirect(redirects);
Router.beforeEach(before);
Router.afterEach(after);

//
// Load our root Vue instance into the DOM
//
import App from './app/root';
Router.start(App, '#app')
