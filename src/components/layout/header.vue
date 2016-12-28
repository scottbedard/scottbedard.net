<style lang='scss' scoped>@import 'core';
    $height-mobile: 60px;
    $height-desktop: 80px;

    .v-header {
        transition-delay: 100ms;
        @include transition(transform);

        &.is-hidden { transform: translateY(-100%) }
    }

    header {
        font-family: 'Lato', sans-serif;
        font-size: 24px;
        font-weight: 300;
        position: absolute;
        width: 100%;
        z-index: 1;
        @include bp-prop('height, line-height', $height-mobile, false, $height-desktop);
    }

    .spacer {
        @include bp-prop('height, line-height', $height-mobile, false, $height-desktop);
    }

    .inner {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: $layout-inner-width;
        padding: 0 $layout-inner-horizontal-padding;
        width: 100%;
    }
</style>

<template>
    <div class="v-header" :class="{ 'is-hidden': isHidden }">
        <header>
            <div class="inner">
                <v-title></v-title>
                <v-desktop-navigation></v-desktop-navigation>
            </div>
        </header>
        <div class="spacer"></div>
    </div>
</template>

<script>
    import RouterState from 'src/state/router';
    import WindowState from 'src/state/window';

    import DesktopNavigationComponent from './desktop_navigation';
    import HamburgerComponent from './hamburger';
    import TitleComponent from './title';

    export default {
        data() {
            return {
                Router: RouterState.state,
            };
        },
        components: {
            'v-desktop-navigation': DesktopNavigationComponent,
            'v-hamburger': HamburgerComponent,
            'v-title': TitleComponent,
        },
        computed: {
            isHidden() {
                let { current } = this.Router;

                return typeof current.meta !== 'undefined'
                    && typeof current.meta.header !== 'undefined'
                    && current.meta.header === false;
            },
        },
    };
</script>
