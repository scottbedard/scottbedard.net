import Post from 'models/blog/post';

//
// Blog-post
//
export default {

    /**
     * @type {String}
     */
    template: require('./templates/show'),

    /**
     * @type {Object}
     */
    route: {

        /**
         * @type {Boolean}
         */
        waitForData: true,

        /**
         * Fetch route data
         *
         * @return void
         */
        data(transition) {
            let cache = {
                id: 'slug',
                key: 'models.blog.post',
                lifespan: 302400, // one month
            };

            new Post(cache).get(this.$route.params)
                .then(model => transition.next({ post: model.data }))
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
     * @return {void}
     */
    attached() {
        this.$nextTick(() => {
            // Highlight any code blocks inside the post content
            if (typeof Prism === 'object') {
                Prism.highlightAll();
            }

            // Once attached to the DOM, find all links embedded in the content and
            // attach a listener to hijack their click event. This will allow us
            // to hand things off to the router, and work the same as v-link.
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
