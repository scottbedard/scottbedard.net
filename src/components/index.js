// Global component registration
export default {
    // page types
    'v-blank-page': require('./layout/pages/blank_page'),
    'v-page': require('./layout/pages/page'),
    'v-splash-page': require('./layout/pages/splash_page'),

    // user interfaces
    'v-button-group': require('./ui/button-group'),
    'v-button-spinner': require('./ui/button_spinner'),
    'v-button': require('./ui/button'),
    'v-modal': require('./ui/modal'),
    'v-spinner': require('./ui/spinner'),
};
