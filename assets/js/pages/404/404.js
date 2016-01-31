//
// Home page
//
export default {

    /**
     * @type {String}
     */
    template: require('./template'),

    /**
     * @type {Object}
     */
    computed: {

        /**
         * Returns a random 404 message
         *
         * @return {String}
         */
        message() {
            let messages = [
                'Page not found',
                'Well, this is awkward...',
                'Oh no, there is nothing here.',
                'Sorry, this page doesn\'t exist.',
                'If only there was a page here...',
            ];

            return messages[Math.floor(Math.random() * messages.length)];
        },
    },
};
