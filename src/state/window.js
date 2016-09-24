export default {
    state: {
        height: 0,
        scrollTop: 0,
        width: 0,
    },
    sync() {
        this.updateScrollTop();
        this.updateDimensions();
    },
    updateScrollTop() {
        this.state.scrollTop = document.body.scrollTop;
    },
    updateDimensions() {
        this.state.width = window.innerWidth;
        this.state.height = window.innerHeight;
    },
};
