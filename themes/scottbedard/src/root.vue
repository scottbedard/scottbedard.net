
<style lang="scss" src="./scss/tailwind.scss"></style>
<style lang="scss" src="./scss/global.scss"></style>

<template>
    <div id="app">
        <!-- layout -->
        <v-fade-transition>
            <component :is="layout">
                <router-view />
            </component>
        </v-fade-transition>
    </div>
</template>

<script>
import defaultLayoutComponent from './layouts/default.vue';

export default {
    computed: {
        layout() {
            return this.$route.meta.layout || defaultLayoutComponent;
        },
    },
};
</script>
