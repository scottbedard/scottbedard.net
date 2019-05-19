
<style lang="scss" src="./scss/tailwind.scss"></style>
<style lang="scss" src="./scss/global.scss"></style>

<template>
    <div id="app">
        <!-- ribbon -->
        <v-ribbon />

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
import ribbonComponent from './components/shared/ribbon.vue';

export default {
    components: {
        'v-ribbon': ribbonComponent,
    },
    computed: {
        layout() {
            // return no layout if we haven't set the route yet
            if (this.$route.name === null) {
                return { render: h => <router-view /> };
            }

            return this.$route.meta.layout || defaultLayoutComponent;
        },
    },
};
</script>
