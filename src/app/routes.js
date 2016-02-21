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
            name: 'blog-post',
            headerTitle: 'blog',
            component: require('pages/blog/post'),
        },

        //
        // Code
        //
        '/code': {
            name: 'code',
            title: 'code',
            component: require('pages/code'),
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
