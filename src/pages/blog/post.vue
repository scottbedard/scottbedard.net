<style lang="sass" scoped>
</style>

<template>
    <article class="blog-post page">
        <v-ribbon></v-ribbon>
        <h3>{{ post.title }}</h3>
        <p v-linkable>{{{ post.content_html }}}</p>
    </article>
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
    };
</script>
