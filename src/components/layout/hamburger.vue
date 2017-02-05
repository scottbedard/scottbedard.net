<style lang="scss" scoped>@import 'core';
    // https://github.com/jonsuh/hamburgers
    $hamburger-layer-color: $font-color;
    $hamburger-layer-height: 2px;
    $hamburger-layer-width: 26px;
    $hamburger-padding-x: 24px;
    $hamburger-padding-y: 24px;
    @import 'hamburgers/_sass/hamburgers/hamburgers';


    button {
        outline: none;
        position: fixed;
        right: 0;
        top: 0;
        z-index: z(mobile-navigation-hamburger);

        @include bp(tablet) {
            display: none !important;
        }

        &.is-active {
            .hamburger-inner,
            .hamburger-inner:before,
            .hamburger-inner:after {
                background-color: $off-white;
            }
        }
    }
</style>

<template>
    <button
        aria-controls="mobile_navigation"
        aria-label="Menu"
        class="hamburger hamburger--squeeze"
        type="button"
        :class="{ 'is-active': Navigation.isMobileExpanded }"
        @click.prevent="onToggleClicked">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
</template>

<script>
    import NavigationState from 'src/state/navigation';

    export default {
        data() {
            return {
                Navigation: NavigationState.state,
            };
        },
        methods: {
            onToggleClicked() {
                NavigationState.toggleMobileNavigation();
            },
        },
    };
</script>
