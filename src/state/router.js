export default {
    state: {
        current: {},
        subtitle: null,
    },
    setCurrentRoute(route) {
        this.state.current = route;
    },
    setSubtitle(subtitle) {
        this.state.subtitle = subtitle || null;
    },
};
