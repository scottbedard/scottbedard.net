import Post from 'models/blog/post';

//
// Blog page
//
export default {

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
            isLoading: false,
            nextPage: 2,
            posts: [],
        };
    },

    /**
     * Let the infinite scroller know we're attached and ready to go
     *
     * @return {void}
     */
    attached() {
        this.$nextTick(() => this.$emit('init-infinite-scroll'));
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
            this.isLoading = true;
            return new Post().get({ page: this.nextPage }).then(response => {
                this.isLoading = false;
                if (response.data.length) {
                    this.nextPage++;
                    this.posts.push(...response.data);
                    return true;
                }
            });
        },
    },
};
