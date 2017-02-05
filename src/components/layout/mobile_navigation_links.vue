<style lang="scss" scoped>@import 'core';
    a {
        color: $off-white;
        display: block;
        padding-left: 10px;
        font-family: 'Lato', sans-serif;
        font-size: 24px;
        font-weight: 300;
        line-height: 60px;

        &:hover {
            color: $red;
        }
    }
</style>

<template>
    <div>
        <template v-for="link in navigation">
            <a v-if="link.href" :href="link.href">{{ link.name }}</a>
            <router-link v-else :to="link.route">{{ link.name }}</router-link>
        </template>
    </div>
</template>

<script>
    import Navigation from 'src/app/navigation';

    export default {
        computed: {
            navigation() {
                return Navigation;
            },
        },
    };
</script>
