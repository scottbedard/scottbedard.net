let Vue = require('vue');

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
});
