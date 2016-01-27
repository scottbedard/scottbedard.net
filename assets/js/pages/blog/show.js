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
        let post = {};
        return { post };
    },

    /**
     * Once attached to the DOM, find all links embedded in the content and
     * attach a listener to hijack their click event. This will allow us
     * to hand things off to the router, acting the same as "v-link".
     *
     * @return {void}
     */
    attached() {
        this.$nextTick(() => {
            let links = this.$el.querySelectorAll('[data-link] a');
            for (let i = 0, len = links.length; i < len; i++) {
                links[i].addEventListener('click', e => {
                    let path = links[i].getAttribute('href');

                    if (path.charAt(0) === '/') {
                        e.preventDefault();
                        this.$route.router.go({ path });
                    }
                });
            }
        });
    },
};
