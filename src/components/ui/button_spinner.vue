<style lang="scss" scoped>@import 'core';
    .v-button-spinner {
        padding-right: 5px;
    }
</style>

<template>
    <v-spinner class="v-button-spinner" :color="color" size="16px"></v-spinner>
</template>

<script>
    export default {
        props: {
            color: { type: String, default: '#fff' },
        },
    };
</script>
