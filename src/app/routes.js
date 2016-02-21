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
            title: 'Thoughts',
            component: require('pages/blog/index'),
        },

        '/blog/:slug': {
            name: 'blog-post',
            component: require('pages/blog/post'),
        },

        //
        // Code
        //
        '/code': {
            name: 'code',
            title: 'Code',
            component: require('pages/code'),
        },

        //
        // 404
        //
        '*': {
            name: '404',
            title: '404',
            component: require('pages/404'),
        },
    },
};
