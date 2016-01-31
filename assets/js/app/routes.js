//
// Routes
//
export default {

    /**
     * Redirects
     *
     * @type {Object}
     */
    redirects: { },

    /**
     * Routes
     *
     * @type {Object}
     */
    routes: {

        //
        // Home
        //
        '/': {
            name: 'home',
            title: '',
            component: require('pages/home/home'),
        },

        //
        // Blog
        //
        '/blog': {
            name: 'blog',
            title: ' - blog',
            component: require('pages/blog/index'),
        },

        '/blog/:slug': {
            name: 'blog-show',
            title: ' - blog',
            component: require('pages/blog/show'),
        },

        //
        // Code
        //
        '/code': {
            name: 'code',
            title: ' - code',
            component: require('pages/code/code'),
        },

        //
        // Contact
        //
        '/contact': {
            name: 'contact',
            title: ' - contact',
            component: require('pages/contact/contact'),
        },

        //
        // 404
        //
        '*': {
            name: '404',
            title: ' - 404',
            component: require('pages/404/404'),
        },
    },
};
