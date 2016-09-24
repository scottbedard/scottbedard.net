<style lang="scss">@import 'global';</style>
<style lang="scss" scoped>@import 'core';
    div {
        width: 100%;
    }
</style>

<template>
    <div>
        <v-header></v-header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import HeaderComponent from 'src/layout/header';

    export default {
        components: {
            'v-header': HeaderComponent,
        },
    };
</script>
