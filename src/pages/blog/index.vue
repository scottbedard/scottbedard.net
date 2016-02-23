<style lang="sass" scoped> @import 'core';
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .top {
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        @include bp-prop(flex-wrap, wrap, nowrap);

        h1 {
            flex-basis: 100%;
            @include transition(color);
            @include bp('min-width: 568px') { flex-basis: auto }
        }

        time {
            flex-basis: 100%;
            @include bp-prop(font-size, 16px, 18px, 20px);
            @include bp('min-width: 568px') { flex-basis: auto }
        }
    }

    a:hover p, a:hover time {
        color: $font-color;
    }
</style>

<template>
    <div class="page">
        <v-ribbon></v-ribbon>
        <main>
            <ul>
                <li v-for="post in posts" class="content content-btn">
                    <a v-link="{ name: 'blog-show', params: { slug: post.slug }}">
                        <div class="top">
                            <h1>{{ post.title }}</h1>
                            <time datetime="{{ post.published_at | moment }}">
                                {{ post.published_at | moment 'MMM DD, YYYY' }}
                            </time>
                        </div>
                        <p>{{{ post.excerpt }}}</p>
                    </a>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
    import Blog from 'resources/blog';
    import HeaderState from 'state/header';

    module.exports = {

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
                return Blog.get().then(response => this.$set('posts', response.data));
            },
        },

        /**
         * @return {Object}
         */
        data() {
            return {
                posts: [],
            };
        },
    };
</script>
