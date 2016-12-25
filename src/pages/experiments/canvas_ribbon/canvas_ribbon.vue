<style lang="scss" scoped>@import 'core';
    a:not(:last-child) {
        margin-right: 20px;
    }

    div {
        font-weight: 300;
    }
</style>

<template>
    <v-blank-page>
        <h1>Canvas ribbon</h1>
        <p>My site background was the product of playing around with the canvas element. It was inspired by <a href="http://evanyou.me" target="_blank" class="colored">Evan You's</a> website.</p>
        <div>
            <a href="#" @click.prevent="onRedrawClicked">
                <i class="fa fa-pencil"></i>
                <span>Redraw</span>
            </a>
            <a href="https://github.com/scottbedard/scottbedard.net/blob/dev/src/components/layout/ribbon.vue">
                <i class="fa fa-code"></i>
                <span>Source code</span>
            </a>
            <a href="#" @click.prevent>
                <i class="fa fa-question"></i>
                <span>About this project</span>
            </a>
        </div>
    </v-blank-page>
</template>

<script>
    import { EventBus } from 'src/app/event_bus';

    export default {
        components: {
            'v-ribbon': require('src/components/layout/ribbon'),
        },
        methods: {
            onRedrawClicked() {
                EventBus.$emit('ribbon:redraw');
            },
        },
    };
</script>
