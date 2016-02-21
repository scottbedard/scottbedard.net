export default {

    /**
     * @type {Object}
     */
    state: {
        isExpanded: false,
        title: '',
    },

    /**
     * Erase the header title
     *
     * @return {void}
     */
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
     * Set the document and header title via the route definition
     *
     * @param  {String} options.docTitle
     * @param  {String} options.headerTitle
     * @param  {String} options.title
     * @return {void}
     */
    setTitleFromRoute({ docTitle, headerTitle, title }) {
        document.title = !docTitle && !title ? 'scottbedard' : `scottbedard / ${ docTitle || title }`;
        this.state.title = !headerTitle && !title ? '' : ` / ${ headerTitle || title }`;
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
