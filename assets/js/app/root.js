import Vue from 'vue';
import Header from 'state/header';

//
// Root Vue instance
//
export default Vue.extend({

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
        window.addEventListener('resize', e => Header.hideNavigation());
        this.$el.parentElement.addEventListener('click', e => Header.hideNavigation());
    },
});
