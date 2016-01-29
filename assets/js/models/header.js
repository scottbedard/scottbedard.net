//
// Header state
//
export default {

    /**
     * @type {Object}
     */
    state: {
        title: '',
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
     * @param {String} title
     */
    setTitle(title) {
        this.state.title = title;
    },

    /**
     * Toggle the mobile navigation
     *
     * @return {void}
     */
    toggleIsExpanded() {
        this.state.isExpanded = !this.state.isExpanded;
    },
};
