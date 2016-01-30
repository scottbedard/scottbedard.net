import Vue from 'vue';

//
// Infinite scroll
//
Vue.directive('infinite-scroll', {

    /**
     * @type {Boolean}
     */
    isLoading: false,

    /**
     * Listen for scroll events and hit the VM's handler. Returning true from
     * the infinite scroll handler will instruct the directive to continue
     * listening for scroll events. False will terminate the directive.
     *
     * @return {void}
     */
    bind() {
        window.onscroll = this.handleScroll.bind(this);
        this.vm.$once('init-infinite-scroll', this.handleScroll.bind(this));
    },

    /**
     * Look at the DOM and determine if we should hit the scroll handler
     *
     * @return {void}
     */
    handleScroll() {
        if (this.isLoading) {
            return;
        }

        let buffer = Number(this.arg) || 0,
            scrollPosition = window.innerHeight + window.scrollY,
            bottomPosition = this.el.offsetHeight + this.el.offsetTop;

        if (scrollPosition + buffer >= bottomPosition) {
            this.isLoading = true;
            this.vm[this.expression]().then(shouldContinue => {
                if (!shouldContinue) {
                    window.onscroll = null;
                } else {
                    this.isLoading = false;
                }
            });
        }
    },
})
