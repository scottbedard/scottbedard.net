<template>
    <v-page padded>
        <v-margin padded>
            Hello world
        </v-margin>
    </v-page>
</template>

<script>
export default {
    created() {
        this.fetchPosts();
    },
    data() {
        return {
            loading: false,
            posts: [],
        };
    },
    methods: {
        fetchPosts() {

        },
    },
};
</script>