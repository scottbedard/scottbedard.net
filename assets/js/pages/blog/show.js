import HeaderModel from 'models/header';
import Post from 'models/blog/post';

//
// Blog-post
//
module.exports = {

    /**
     * @type {String}
     */
    template: require('./templates/show'),

    /**
     * @type {Object}
     */
    route: {

        /**
         * Fetch route data
         *
         * @return void
         */
        activate(transition) {
            new Post(this.$route.params).get()
                .then(model => {
                    this.post = model.data;
                    transition.next();
                })
                .catch(error => transition.redirect('/blog'));
        },
    },

    /**
     * @return {Object}
     */
    data() {
        return {
            post: {},
        };
    },
};
