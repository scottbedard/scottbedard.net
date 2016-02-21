<style lang="sass"> @import './../style'; </style>

<template>
    <div>
        <v-header></v-header>
        <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>
</template>

<script>
    import Header from 'components/header';

    export default {
        components: {
            'v-header': Header,
        },
    }
</script>
