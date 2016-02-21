<style lang="sass" scoped> @import 'core';
    header {
        background-color: #fff;
        border-bottom: $header-border;
    }

    .inner {
        align-items: center;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 0 $layout-padding;
        @include bp-prop(height, $header-height-mobile, $header-height-tablet, $header-height-desktop);
        @include transition(height);
    }

    .nav-toggle {
        font-size: 24px;
        @include bp-prop(display, block, none);
    }
</style>

<template>
    <header>
        <div class="inner">
            <v-title :title="title"></v-title>
            <v-nav :is-expanded="isExpanded"></v-nav>
            <a href="#" @click.prevent="toggleNav" class="nav-toggle">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </header>
</template>

<script>
    import HeaderState from 'state/header';

    export default {

        /**
         * @return {Object}
         */
        data() {
            return HeaderState.state;
        },

        /**
         * Collapse the mobile nav on resize, scroll, or click off.
         *
         * @return {void}
         */
        attached() {
            this.$el.addEventListener('click', e => e.stopPropagation());
            window.addEventListener('click', () => HeaderState.hideMobileNav());
            window.addEventListener('resize', () => HeaderState.hideMobileNav());
            window.addEventListener('scroll', () => HeaderState.hideMobileNav());
        },

        /**
         * @type {Object}
         */
        components: {
            'v-nav': require('components/nav'),
            'v-title': require('components/title'),
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Toggle the mobile navigation.
             *
             * @return {void}
             */
            toggleNav() {
                HeaderState.toggleMobileNav();
            },
        },
    };
</script>
