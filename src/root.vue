<style lang="scss">@import 'global';</style>

<template>
    <div class="v-root">
        <v-ribbon></v-ribbon>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import HeaderComponent from 'src/layout/header';
    import RibbonComponent from 'src/components/ribbon';

    export default {
        components: {
            'v-header': HeaderComponent,
            'v-ribbon': RibbonComponent,
        },
    };
</script>
