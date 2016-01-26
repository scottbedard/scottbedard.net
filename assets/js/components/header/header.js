let Vue = require('vue'),
    HeaderModel = require('models/header');

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

    methods: {

        onMobileMenuClick(e) {
            e.preventDefault();
            this.isExpanded = !this.isExpanded;
            console.log (this.isExpanded);
        },
    },
};
