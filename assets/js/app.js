//
// On your mark
//
require('es6-promise').polyfill();
let Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);
require('./app/filters');
require('./app/directives/infiniteScroll');
require('./components/ribbon/ribbon');
require('./components/spinner/spinner');
require('./components/typewriter/typewriter');

//
// Get set
//
let App = require('./app/root'),
    Router = new VueRouter(require('./app/config'));

Router.map(require('./app/routes'));
Router.redirect(require('./app/redirects'));
Router.beforeEach(require('./app/beforeRoute'));
Router.afterEach(require('./app/afterRoute'));

//
// Go
//
Router.start(App, '#app')
