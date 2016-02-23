<!-- Scoped styles cannot target dynamic content like a blog post -->
<style lang="sass"> @import 'core';
    main.blog-show {
        h1 {
            border-bottom: 1px solid darken($bg-color, 10%);
            @include bp-prop(padding-bottom, $layout-padding, $layout-padding * 2);
        }

        p {
            @include bp-prop(padding-top, $layout-padding, $layout-padding * 2);
        }
    }
</style>

<template>
    <main class="page blog-show">
        <v-ribbon></v-ribbon>
        <article class="content">
            <h1>{{ post.title }}</h1>
            <div v-linkable>{{{ post.content_html }}}</div>
        </article>
    </main>
</template>

<script>
    import Blog from 'resources/blog';

    export default {

        /**
         * @type {Object}
         */
        route: {

            /**
             * @type {Boolean}
             */
            waitForData: true,

            /**
             * Fetch route data
             *
             * @param  {Object}     transition
             * @return {Promise}
             */
            data(transition) {
                return Blog.get(this.$route.params).then(response => this.$set('post', response.data));
            },
        },

        /**
         * @return {Object}
         */
        data() {
            return {
                post: { },
            };
        },

        /**
         * Apply prism highlighting
         *
         * @return {void}
         */
        attached() {
            Prism.highlightAll();
        },
    };
</script>
