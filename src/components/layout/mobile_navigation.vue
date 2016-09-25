<style lang="scss" scoped>@import 'core';
    .v-hamburger {
        transform: translateY(0);
        transition-delay: 100ms;
        @include transition(transform);

        &.is-hidden {
            transform: translateY(-100%);
        }
    }

    nav {
        background-color: rgba(0, 0, 0, 0.95);
        bottom: 0;
        color: $off-white;
        display: flex;
        max-width: 320px;
        right: 0;
        top: 0;
        padding: 12px 20px;
        position: fixed;
        transform: translateX(100%);
        width: 75%;
        z-index: z(mobile-navigation-content);
        @include transition(transform);

        &.is-visible {
            transform: translateX(0%);
        }
    }

    a {
        color: $white;
        &:hover {
            color: $red;
        }
    }
</style>

<template>
    <div>
        <v-hamburger class="v-hamburger" :class="{ 'is-hidden': isHome }"></v-hamburger>
        <nav :class="{ 'is-visible': Navigation.isMobileExpanded }">
            <v-mobile-navigation-links></v-mobile-navigation-links>
        </nav>
    </div>
</template>

<script>
    import NavigationState from 'src/state/navigation';
    import WindowState from 'src/state/window';

    import HamburgerComponent from './hamburger';
    import MobileNavigationLinksComponent from './mobile_navigation_links';

    export default {
        data() {
            return {
                dismissListener: null,
                Navigation: NavigationState.state,
                Window: WindowState.state,
            };
        },
        components: {
            'v-hamburger': HamburgerComponent,
            'v-mobile-navigation-links': MobileNavigationLinksComponent,
        },
        computed: {
            isHome() {
                return this.$route.path === '/';
            },
        },
        methods: {
            onBodyClicked(e) {
                for (let el of e.path) {
                    if (el === this.$el) {
                        return;
                    }
                }

                NavigationState.closeMobileNavigation();
            },
            bindDismissListener() {
                this.dismissListener = this.onBodyClicked.bind(this);
                document.body.addEventListener('click', this.dismissListener, true);
            },
            unbindDismissListener() {
                document.body.removeEventListener('click', this.dismissListener, true);
            },
            onRouteChanged() {
                NavigationState.closeMobileNavigation();
            },
            onVisibilityChanged(isVisible) {
                if (isVisible) {
                    this.bindDismissListener();
                } else {
                    this.unbindDismissListener();
                }
            },
            onWindowResized() {
                NavigationState.closeMobileNavigation();
            },
        },
        watch: {
            'Window.width': 'onWindowResized',
            'Navigation.isMobileExpanded': 'onVisibilityChanged',
            '$route': 'onRouteChanged',
        },
    };
</script>
