export default {

    /**
     * @type {Object}
     */
    state: {
        isExpanded: false,
        title: '',
    },

    clearTitle() {
        this.state.title = '';
    },

    /**
     * Hide the mobile nav
     *
     * @return {void}
     */
    hideMobileNav() {
        this.state.isExpanded = false;
    },

    /**
     * Set the header title
     *
     * @param {String|null}     title
     */
    setTitle(title = null) {
        this.state.title = ' / ' + title;
    },

    /**
     * Show the mobile nav
     *
     * @return {void}
     */
    showMobileNav() {
        this.state.isExpanded = true;
    },

    /**
     * Toggle the mobile navigation
     *
     * @return {void}
     */
    toggleMobileNav() {
        this.state.isExpanded = !this.state.isExpanded;
    },
};
