//
// Header state
//
export default {

    /**
     * @type {Object}
     */
    state: {
        subtitle: '',
        isExpanded: false,
        navigation: [
            { name: 'blog', text: 'Thoughts' },
            { name: 'code', text: 'Experiments' },
            { name: 'contact', text: 'Github' },
        ],
    },

    /**
     * Set the mobile navigation state
     *
     * @param {Boolean} value
     */
    setIsExpanded(value) {
        if (this.state.isExpanded !== value) {
            this.state.isExpanded = Boolean(value);
        }
    },

    /**
     * Helper method to hide the mobile navigation
     *
     * @return {void}
     */
    hideNavigation() {
        this.setIsExpanded(false);
    },

    /**
     * Set the main site title
     *
     * @param {String} value
     */
    setSubtitle(value) {
        this.state.subtitle = value;
    },

    /**
     * Toggle the mobile navigation
     *
     * @return {void}
     */
    toggleNavigation() {
        this.state.isExpanded = !this.state.isExpanded;
    },
};
