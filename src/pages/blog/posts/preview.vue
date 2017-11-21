<style lang="scss" scoped>@import 'core';
    .v-post-preview {
        display: block;
        background-color: rgba($white, 0.9);
        border-radius: 3px;
        padding: 20px;
        &:not(:last-child) { margin-bottom: 20px }
    }

    p {
        margin-bottom: 0;
        &:empty { display: none }
    }
</style>

<template>
    <router-link class="v-post-preview" :to="{ name: 'blog.post', params: { slug: post.slug }}">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
    </router-link>
</template>

<script>
    export default {
        props: [
            'post',
        ],
    };
</script>
