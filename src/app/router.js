import HeaderState from 'state/header';

//
// Config
//
module.exports = {

    /**
     * Config
     *
     * @type {Object}
     */
    config: {
        hashbang: false,
        history: true,
        saveScrollPosition: true,
    },

    /**
     * Before route starts transitioning
     *
     * @param  {Object}     options.from        Route we are transitioning from
     * @param  {Object}     options.to          Route we are transitioning to
     * @param  {Function}   options.next        Progress to the next step of the transition
     * @param  {Function}   options.abort       Cancel / reject the transition
     * @param  {Function}   options.redirect    Cancel and redirect to a different route
     * @return {void}
     */
    before({ from, to, next, abort, redirect }) {
        HeaderState.hideMobileNav();
        next();
    },

    /**
     * After route has transitioned
     *
     * @param  {Object}     options.from        Route we are transitioning from
     * @param  {Object}     options.to          Route we are transitioning to
     * @return {void}
     */
    after({ from, to }) {
        let { docTitle, headerTitle, title } = to;
        HeaderState.setTitleFromRoute({ docTitle, headerTitle, title });

        // Log page hit with Google Analytics
        ga('send', 'pageview', to.path);
    },
};
