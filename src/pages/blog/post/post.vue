<style lang="scss" scoped>@import 'core';
    .v-spinner {
        display: flex;
        justify-content: center;
        padding: 50px 0;
        width: 100%;
    }

    .comments {
        padding: 20px 0;
    }
</style>

<template>
    <v-page>
        <transition name="fade" mode="out-in">
            <v-spinner v-if="isLoading" thickness="3" size="50px" color="#ccc"></v-spinner>
            <div v-else>
                <div v-linkable v-prism>
                    <h1>{{ post.title }}</h1>
                    <div v-html="post.content_html"></div>
                </div>
                <div class="comments">
                    <v-disqus></v-disqus>
                </div>
            </div>
        </transition>
    </v-page>
</template>

<script>
    import BlogResource from 'src/resources/blog';

    export default {
        created() {
            this.fetchPost();
        },
        data() {
            return {
                isLoading: false,
                post: {},
            };
        },
        methods: {
            fetchPost() {
                this.isLoading = true;

                let { slug } = this.$route.params;
                BlogResource.getPost(slug)
                    .then(this.onFetchComplete)
                    .catch(this.onFetchFailed)
                    .then(() => this.isLoading = false);
            },
            onFetchComplete(response) {
                this.post = response.data;
            },
            onFetchFailed(error) {
                this.$router.replace({ name: '500' });
            },
        },
    };
</script>
