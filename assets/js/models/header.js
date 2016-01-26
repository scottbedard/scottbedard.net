//
// Header model
//
export default {

    /**
     * @type {Object}
     */
    state: {
        title: '',
        isExpanded: true,
        navigation: [
            { name: 'blog', text: 'Thoughts' },
            { name: 'code', text: 'Experiments' },
            { name: 'contact', text: 'Github' },
        ],
    },

    /**
     * Set the main site title
     *
     * @param {String} title
     */
    setTitle(title) {
        this.state.title = title;
    },
};
