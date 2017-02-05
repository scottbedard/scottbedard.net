export default {
    state: {
        isMobileExpanded: false,
    },
    closeMobileNavigation() {
        this.state.isMobileExpanded = false;
    },
    openMobileNavigation() {
        this.state.isMobileExpanded = true;
    },
    toggleMobileNavigation() {
        this.state.isMobileExpanded = !this.state.isMobileExpanded;
    },
};
