import Vue from 'vue';

//
// Infinite scroll
//
export default Vue.directive('infinite-scroll', {

    /**
     * Listen for scroll events and hit the VM's handler
     *
     * @return {void}
     */
    bind() {
        // Start with a null infinite scrolling state
        let isInfiniteScrolling = false;
        window.onscroll = () => {
            if (!isInfiniteScrolling) {
                let buffer = Number(this.arg) || 0,
                    scrollPosition = window.innerHeight + window.scrollY,
                    bottomPosition = this.el.offsetHeight + this.el.offsetTop;

                if (scrollPosition + buffer >= bottomPosition) {
                    isInfiniteScrolling = true;
                    this.vm[this.expression]().then(() => isInfiniteScrolling = false);
                }
            }
        };
    },
})
