<template>
    <v-page padded>
        <v-margin padded>
            <v-background-text>
                <h1 class="font-thin mb-4 text-3xl">
                    The Speedcube Site
                </h1>
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2">
                        <v-card padded>
                            <div class="leading-normal max-w-md text-grey-darkest">
                                <p class="mb-4">
                                    Have you ever built something just to see if you could? Well,
                                    I'm afraid that's what we have here. Several years ago, I wanted
                                    to experiment with 3D transforms. To do this, I decided to make
                                    a fully functional Rubik's cube out of CSS.
                                </p>
                                <p class="mb-4">
                                    This technique worked, but one thing quickly became obvious. <strong>
                                    CSS was the absolute wrong tool for the job.</strong> It starts breaking
                                    down around 5x5 and higher. The browser starts failing to render stickers,
                                    and animation performance quickly falls apart. Additionally, our ability
                                    to render the puzzle is limited by how DOM nodes can be styled. This makes
                                    things like customizable lighting, sticker positioning, or camera perspective
                                    completely unreasonable with this approach.
                                </p>
                                <p>
                                    To solve these problems, I decided to go back to the drawing board. It
                                    was time to learn more about 3D rendering on the web. The new version
                                    is rendered with WebGL using Three.js, and I couldn't be happier with how it
                                    turned out. Head over to <a href="https://speedcube.site" title="The Speedcube Site">
                                    the speedcube site</a> to see what this experiment has turned into.
                                </p>
                            </div>
                        </v-card>
                        <div class="mt-4">
                            <a
                                class="flex font-thin items-center"
                                href="https://github.com/scottbedard/scottbedard.net/blob/master/themes/scottbedard/src/pages/experiments/cube/3/3.vue"
                                target="_blank"
                                title="Click view this page on GitHub">
                                <i class="fa fa-code mr-2"></i>
                                View Source
                            </a>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 md:pl-8">
                        <v-cube />
                    </div>
                </div>
            </v-background-text>
        </v-margin>
    </v-page>
</template>

<script>
import cubeComponent from './3/3.vue';

export default {
    components: {
        'v-cube': cubeComponent,
    },
};
</script>
