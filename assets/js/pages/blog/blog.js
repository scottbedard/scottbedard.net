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
        activate(transition) {
            this.$http.get('/owl/rainlabblogapi/posts').then(response => {
                this.$set('first', response.data.shift());
                this.$set('posts', response.data);

                transition.next();
            });
        },
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
