<template>
    <v-page padded>
        <v-margin padded>
            <h1 class="font-thin mb-4 text-3xl">
                Canvas Ribbon
            </h1>
            <p class="font-thin leading-normal max-w-md mb-4 text-grey-darkest">
                A while back I decided to start learning about the much feared
                <span class="font-mono">&lt;canvas&gt;</span> element. This colorful
                group of triangles is from one of my very first experiments with it.
            </p>
            <div class="flex items-center">
                <a
                    class="flex font-thin items-center"
                    href="#"
                    title="Click to redraw the canvas ribbon"
                    @click.prevent="redraw">
                    <i class="fa fa-refresh mr-2"></i>
                    Redraw
                </a>
                <a
                    class="flex font-thin items-center ml-8"
                    href="#"
                    title="Click to redraw the canvas ribbon"
                    @click.prevent>
                    <i class="fa fa-code mr-2"></i>
                    View Source
                </a>
            </div>
        </v-margin>
    </v-page>
</template>

<script>
export default {
    methods: {
        redraw() {
            this.$root.$emit('redraw-canvas-ribbon');
        },
    },
};
</script>
