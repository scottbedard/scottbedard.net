<!-- Scoped styles cannot target dynamic content like a blog post -->
<style lang="sass"> @import 'core';
    main.blog-show {
        div.top {
            border-bottom: 1px solid darken($bg-color, 15%);
            display: flex;
            justify-content: space-between;
            @include bp-prop(flex-wrap, wrap, nowrap);
            @include bp-prop(flex-basis, 100%, auto);
            @include bp-prop(padding-bottom, $layout-padding, $layout-padding * 2);
        }

        p {
            @include bp-prop(padding-top, $layout-padding, $layout-padding * 2);
        }

        blockquote {
            border-bottom: 1px solid darken($bg-color, 15%);
            margin: 0;
            @include bp-prop(padding, 12px, 24px);
            p { padding-top: 0 }
            + hr { display: none }
        }
    }
</style>

<template>
    <main class="page blog-show">
        <v-ribbon></v-ribbon>
        <article class="content">
            <div class="top">
                <h1>{{ post.title }}</h1>
                <time datetime="{{ post.published_at | moment }}">
                    {{ post.published_at | moment 'MMM DD, YYYY' }}
                </time>
            </div>
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
            if (typeof Prism !== 'undefined') {
                Prism.highlightAll();
            }
        },
    };
</script>
