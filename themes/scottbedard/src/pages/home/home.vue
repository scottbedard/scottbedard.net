<template functional>
    <div>
        <v-margin class="flex justify-center" padded>
            <div class="text-center">
                <!-- title -->
                <h1 class="font-thin mb-2 text-4xl transition-font md:mb-4 md:text-5xl">
                    Hi, I'm Scott.
                </h1>

                <!-- secondary title -->
                <h2 class="font-thin mb-8 text-2xl transition-font md:text-3xl">
                    Welcome to my personal code playground.
                </h2>

                <!-- nav -->
                <nav class="flex flex-wrap justify-center -m-2 overflow-hidden transition-margin sm:-m-4">
                    <v-button
                        class="m-2 transition-margin sm:m-4"
                        color="green">
                        Thoughts
                    </v-button>
                    <v-button
                        class="m-2 transition-margin sm:m-4"
                        color="blue">
                        Experiments
                    </v-button>
                    <v-button
                        class="m-2 transition-margin sm:m-4"
                        color="indigo"
                        :to="{ name: 'skills' }">
                        Skills
                    </v-button>
                    <v-button
                        class="m-2 transition-margin sm:m-4"
                        color="red">
                        Contact
                    </v-button>
                    <v-button
                        class="m-2 transition-margin sm:m-4"
                        color="teal"
                        href="https://github.com/scottbedard"
                        target="_blank">
                        GitHub
                    </v-button>
                </nav>
            </div>
        </v-margin>
    </div>
</template>
