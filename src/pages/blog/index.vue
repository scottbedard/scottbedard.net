<style lang="sass" scoped> @import 'core';
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .top {
        margin-bottom: 12px;
        overflow: hidden;

        h1 {
            @include bp(tablet) { float: left }
            @include transition(color);
        }

        time {
            display: inline-block;
            font-weight: 300;
            color: lighten($font-color, 5%);
            @include bp-prop(margin-top, 6px, none);
            @include bp-prop(float, false, right);
            @include bp-prop(font-size, 16px, 18px, 20px);
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
