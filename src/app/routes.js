module.exports = {

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
        // Intro
        //
        '/': {
            name: 'home',
            component: require('pages/home'),
        },

        //
        // Blog
        //
        '/blog': {
            name: 'blog',
            title: 'blog',
            component: require('pages/blog/index'),
        },

        '/blog/:slug': {
            name: 'blog-show',
            headerTitle: 'blog',
            component: require('pages/blog/show'),
        },

        //
        // 404
        //
        '*': {
            name: '404',
            component: require('pages/404'),
        },
    },
};
