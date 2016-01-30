let HeaderModel = require('models/header');

//
// Site header
//
export default {

    /**
     * @type {String}
     */
    template: require('./template'),

    /**
     * @return {Object}
     */
    data() {
        return HeaderModel.state;
    },

    /**
     * @type {Object}
     */
    methods: {

        /**
         * Toggle the mobile menu
         *
         * @param  {Object} e
         * @return {void}
         */
        onMobileMenuClick(e) {
            e.preventDefault();
            this.isExpanded = !this.isExpanded;
        },
    },

    /**
     * Prevent local clicks from closing the mobile menu
     *
     * @return {void}
     */
    attached() {
        this.$el.addEventListener('click', e => e.stopPropagation());
        window.addEventListener('scroll', e => this.isExpanded = false);
    },
};
