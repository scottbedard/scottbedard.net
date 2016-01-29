import Vue from 'vue';
import Header from 'models/header';

//
// Root Vue instance
//
module.exports = Vue.extend({

    /**
     * Components
     *
     * @type {Object}
     */
    components: {
        'v-header': require('components/header/header'),
    },

    /**
     * Set up an event listener to close the mobile menu
     *
     * @return {void}
     */
    attached() {
        window.onresize = () => { Header.hideNavigation() };
        this.$el.parentElement.addEventListener('click', e => Header.hideNavigation());
    },
});
