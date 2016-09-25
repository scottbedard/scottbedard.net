<style lang='scss' scoped>@import 'core';
    $height-mobile: 60px;
    $height-desktop: 80px;

    header {
        font-family: 'Lato', sans-serif;
        font-size: 24px;
        font-weight: 300;
        transition-delay: 100ms;
        @include transition(transform);

        @include bp-prop('height, line-height', $height-mobile, false, $height-desktop);

        &.is-hidden {
            transform: translateY(-100%);
        }
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
    <header :class="{ 'is-hidden': isHidden }">
        <div class="inner">
            <v-title></v-title>
            <v-desktop-navigation></v-desktop-navigation>
        </div>
    </header>
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
