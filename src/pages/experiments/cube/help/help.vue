<style lang="scss" scoped>@import 'core';
    a {
        color: #ccc;
        display: block;
        &:not(:last-child) { margin-bottom: 5px }
        &:hover { color: $red }

        i {
            text-align: center;
            width: 20px;
        }
    }
</style>

<template>
    <div class="v-help">
        <a href="#" @click.prevent="onControlsClicked">
            <i class="fa fa-gamepad"></i>
            <span>controls</span>
        </a>
        <a href="https://github.com/scottbedard/scottbedard.net/tree/dev/src/pages/experiments/cube">
            <i class="fa fa-code"></i>
            <span>source code</span>
        </a>
        <a href="#" @click.prevent>
            <i class="fa fa-question"></i>
            <span>about this project</span>
        </a>

        <v-modal ref="modal">
            <v-controls></v-controls>
        </v-modal>
    </div>
</template>

<script>
    export default {
        components: {
            'v-controls': require('./controls'),
        },
        methods: {
            onControlsClicked() {
                this.$refs.modal.show();
            },
        },
    };
</script>
