import Header from 'state/header';

//
// Router
//
export default {

    /**
     * Config
     *
     * @type {Object}
     */
    config: {
        debug: true,
        hashbang: false,
        history: true,
        saveScrollPosition: true,
    },

    /**
     * Before route starts transitioning
     *
     * @param  {Object}     options.from        Route object representing the route we are transitioning from.
     * @param  {Object}     options.to          Route object representing the target path.
     * @param  {Function}   options.next        Progress to the next step of the transition.
     * @param  {Function}   options.abort       Cancel / reject the transition.
     * @param  {Function}   options.redirect    Cancel and redirect to a different route.
     * @return {void}
     */
    before({ from, to, next, abort, redirect }) {
        Header.hideNavigation();
        next();
    },

    /**
     * After route has transitioned
     *
     * @param  {Object}     options.from        Route object representing the route we are transitioning from.
     * @param  {Object}     options.to          Route object representing the target path.
     * @return {void}
     */
    after({ from, to }) {
        if (typeof to.title !== 'undefined') {
            document.title = to.title;
            Header.setSubtitle(to.title);
        }
    },
};
