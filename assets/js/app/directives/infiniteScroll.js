import Vue from 'vue';

//
// Infinite scroll
//
Vue.directive('infinite-scroll', {

    /**
     * Listen for scroll events and hit the VM's handler
     *
     * @return {void}
     */
    bind() {
        let isLoading = false;
        window.onscroll = () => {
            if (!isLoading) {
                let buffer = Number(this.arg) || 0,
                    scrollPosition = window.innerHeight + window.scrollY,
                    bottomPosition = this.el.offsetHeight + this.el.offsetTop;

                if (scrollPosition + buffer >= bottomPosition) {
                    isLoading = true;
                    this.vm[this.expression]().then(() => isLoading = false);
                }
            }
        };
    },
})
