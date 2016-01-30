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
                .then(response => transition.next({ posts: response.data }))
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
            nextPage: 2,
            posts: [],
        };
    },

    /**
     * @type {Object}
     */
    methods: {

        /**
         * Load more posts when the bottom of our document is reached
         *
         * @return {void}
         */
        onLoadMorePosts() {
            return new Post().get({ page: this.nextPage }).then(response => {
                if (response.data.length) {
                    this.nextPage++;
                    this.posts.push(...response.data);
                    return true;
                }
            });
        }
    }
};
