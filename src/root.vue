<style lang="scss">@import 'global';</style>

<template>
    <div class="v-root">
        <v-header></v-header>
        <v-ribbon></v-ribbon>
        <v-mobile-navigation></v-mobile-navigation>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import HeaderComponent from 'src/components/layout/header';
    import MobileNavigationComponent from 'src/components/layout/mobile_navigation';
    import RibbonComponent from 'src/components/layout/ribbon';

    export default {
        components: {
            'v-header': HeaderComponent,
            'v-mobile-navigation': MobileNavigationComponent,
            'v-ribbon': RibbonComponent,
        },
    };
</script>
