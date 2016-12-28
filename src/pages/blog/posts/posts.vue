<style lang="scss" scoped>@import 'core';
    .loading {
        display: flex;
        justify-content: center;
        padding: 50px 0;
    }
</style>

<template>
    <v-blank-page class="v-posts">
        <transition name="fade" mode="out-in">
            <div v-if="isLoading" class="loading">
                <v-spinner thickness="3" size="50px" color="#ccc"></v-spinner>
            </div>
            <div v-else>
                <v-post-preview v-for="post in posts" :post="post"></v-post-preview>
            </div>
        </transition>
    </v-blank-page>
</template>

<script>
    import BlogResource from 'src/resources/blog';

    export default {
        created() {
            this.fetchPosts();
        },
        data() {
            return {
                isLoading: true,
                posts: [],
            };
        },
        components: {
            'v-post-preview': require('./preview'),
        },
        methods: {
            fetchPosts() {
                this.isLoading = true;

                // @todo: implement pagination
                let params = {
                    select: 'title,slug,excerpt,published_at',
                    order: 'published_at,desc',
                };

                BlogResource.getPosts(params)
                    .then(this.onFetchComplete)
                    .catch(this.onFetchFailed)
                    .then(() => this.isLoading = false);
            },
            onFetchComplete(response) {
                this.posts = response.data.posts;
            },
            onFetchFailed(error) {

            },
        },
    };
</script>
