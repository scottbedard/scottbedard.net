//
// Routes
//
export default {

    /**
     * Redirects
     *
     * @type {Object}
     */
    redirects: {
        'cube': 'css-cube',
    },

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
        // Css cube
        //
        '/css-cube': {
            name: 'cube',
            title: ' - css cube',
            component: require('pages/cube/cube'),
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
