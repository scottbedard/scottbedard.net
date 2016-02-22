<style lang="sass" scoped> @import 'core';
    nav {
        background-color: #fff;
        left: 0;
        overflow: hidden;
        top: $header-height-mobile;
        width: 100%;
        z-index: 1;
        @include bp-prop(border-bottom, $header-border, none);
        @include bp-prop(max-width, false, 500px);
        @include bp-prop(position, absolute, static);
    }

    ul {
        display: flex;
        list-style: none;
        justify-content: flex-end;
        margin: 0;
        padding: 0;
        @include bp-prop(flex-wrap, wrap, nowrap);
        @include bp-prop(max-height, 0, none);
        @include transition(max-height, 0.2s, ease-in-out);
        &.is-expanded { max-height: 500px }
    }

    li {
        @include bp-prop(border-top, 1px solid #e0e0e0, none);
        @include bp-prop(flex-basis, 100%, auto);
        @include bp-prop(text-align, center, right);
        @include transition(margin-left);

        &:not(:first-of-type) {
            @include bp-prop(margin-left, false, 60px, 100px);
        }
    }

    a {
        text-transform: lowercase;
        padding: 12px 0;
        @include bp-prop(display, block, inline);
        @include bp-prop(font-size, 16px, 18px, 20px);
        @include transition('background-color, color, font-size');
        &:hover {
            @include bp-prop(background-color, darken($bg-color, 1%), transparent);
            text-decoration: none;
        }
    }
</style>

<template>
    <nav>
        <ul v-bind:class="{ 'is-expanded': isExpanded }">
            <li><a v-link="{ name: 'blog' }">Thoughts</a></li>
            <li><a v-link="{ name: 'code' }">Code</a></li>
            <li><a href="https://github.com/scottbedard">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {

        /**
         * @type {Array}
         */
         props: ['isExpanded'],
    };
</script>
