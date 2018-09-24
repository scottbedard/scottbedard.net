<style lang="scss" src="./scss/tailwind.scss"></style>
<style lang="scss" src="./scss/global.scss"></style>

<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.$store.commit('browser/setHeight', window.innerHeight);
            this.$store.commit('browser/setWidth', window.innerWidth);
        },
    },
});
</script>
