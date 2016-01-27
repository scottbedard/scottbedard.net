import Post from 'models/blog/post';

//
// Blog page
//
module.exports = {

    /**
     * @type {String}
     */
    template: require('./templates/index'),

    /**
     * Fetch route data
     *
     * @type {Object}
     */
    route: {
        data(transition) {
            new Post().get()
                .then(response => transition.next({
                    first: response.data.shift(),
                    posts: response.data,
                }))
                .catch(error => transition.redirect('/error'));
        },

        /**
         * @type {Boolean}
         */
        waitForData: true,
    },

    /**
     * @return {Object}
     */
    data() {
        return {
            first: {},
            posts: [],
        };
    },
};
