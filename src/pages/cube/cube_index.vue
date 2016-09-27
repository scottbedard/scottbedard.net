<style lang="scss" scoped>@import 'core';
    .spacer {
        height: 320px;
    }
</style>

<template>
    <div class="page default">
        <div class="inner">
            <v-cube class="v-cube"></v-cube>
            <div class="spacer"></div>
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
    };
</script>
