<template>
    <v-page padded>
        <v-margin padded>
            <h1 class="font-thin mb-4 text-3xl">
                CSS Cube
            </h1>
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2">
                    <p class="font-thin leading-normal max-w-md mb-4 text-grey-darkest">
                        Have you ever built something just to see if you could? Well,
                        I'm afraid that's what we have here. I was too busy wondering if
                        I could, that I never stopped to ask if I should.
                    </p>
                    <p class="font-thin leading-normal max-w-md mb-4 text-grey-darkest">
                        Behold, a fully functional Rubik's cube rendered entirely with CSS.
                        I am only using JavaScript to manage state and apply styles to the
                        various stickers. This used to be interactive, with key bindings that
                        felt roughly similar to real speed cubing. In the years since this
                        experiment though, I've decided no longer to support solving on this version.
                        You're welcome to scramble the puzzle and enjoy the weird CSS, but to
                        start solving head over to <a href="https://speedcube.site" target="_blank">
                        the speedcube site</a>.
                    </p>
                    <div class="mb-8">
                        <a
                            class="flex font-thin items-center"
                            href="https://github.com/scottbedard/scottbedard.net"
                            target="_blank"
                            title="Click view this page on GitHub">
                            <i class="fa fa-code mr-2"></i>
                            View Source
                        </a>
                    </div>
                    <div class="bg-grey-light font-thin leading-normal max-w-md mb-8 p-4 rounded text-grey-darkest text-sm">
                        <p class="mb-4">
                            <strong>I've since turned this experiment into a real site!</strong><br />
                            Don't worry, I didn't use CSS to do the rendering. It's built using threejs,
                            and has loads of features that this one never could. If you're a speed cuber
                            and would like to get involved, it's entirely open source.
                        </p>
                        <a
                            class="flex items-center"
                            href="https://speedcube.site"
                            target="_blank">
                            <i class="fa fa-external-link mr-2"></i>
                            <span>Click here to check it out!</span>
                        </a>
                    </div>
                </div>
                <div class="w-full md:w-1/2 md:pl-8">
                    <v-cube />
                </div>
            </div>
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
