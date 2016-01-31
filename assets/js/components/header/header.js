import Header from 'state/header';

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
        return Header.state;
    },

    /**
     * @type {Object}
     */
    methods: {

        /**
         * Toggle the mobile menu
         *
         * @return {void}
         */
        onMobileMenuClick() {
            Header.toggleNavigation();
        },
    },

    /**
     * Set up event listeners to close the mobile navigation
     *
     * @return {void}
     */
    attached() {
        this.$el.addEventListener('click', e => e.stopPropagation());
        window.addEventListener('scroll', e => Header.hideNavigation());
    },
};
