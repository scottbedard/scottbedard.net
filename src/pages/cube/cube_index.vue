<style lang="scss" scoped>@import 'core';
    .inner {
        text-align: center;
    }
</style>

<template>
    <div class="page default">
        <div class="inner">
            <v-cube class="v-cube"></v-cube>
        </div>
    </div>
</template>

<script>
    import CubeComponent from './components/cube';

    export default {
        data() {
            return {
                //
            };
        },
        components: {
            'v-cube': CubeComponent,
        },
        methods: {

        },
    };
</script>
