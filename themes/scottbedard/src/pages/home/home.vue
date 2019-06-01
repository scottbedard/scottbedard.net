<template functional>
    <v-page padded>
        <v-margin class="flex justify-center" padded>
            <div class="text-center">
                <!-- title -->
                <h1 class="font-thin mb-2 text-4xl transition-font md:mb-4 md:text-5xl">
                    Hi, I'm Scott&nbsp;Bedard.
                </h1>

                <!-- secondary title -->
                <h2 class="font-thin mb-8 text-2xl transition-font md:text-3xl">
                    Welcome to my personal code playground.
                </h2>

                <!-- nav -->
                <nav class="flex flex-wrap justify-center -m-2 overflow-hidden transition-margin sm:-m-4">
                    <div class="p-2 w-1/2 sm:max-w-none sm:w-auto">
                        <v-button
                            class="w-full"
                            color="green"
                            :to="{ name: 'skills' }">
                            Skills
                        </v-button>
                    </div>
                    <div class="p-2 w-1/2 sm:max-w-none sm:w-auto">
                        <v-button
                            class="w-full"
                            color="blue"
                            :to="{ name: 'experiments' }">
                            Experiments
                        </v-button>
                    </div>
                    <div class="p-2 w-1/2 sm:max-w-none sm:w-auto">
                        <v-button
                            class="w-full"
                            color="indigo"
                            :to="{ name: 'blog' }">
                            Thoughts
                        </v-button>
                    </div>
                    <div class="p-2 w-1/2 sm:max-w-none sm:w-auto">
                        <v-button
                            class="w-full"
                            color="red"
                            :to="{ name: 'contact' }">
                            Contact
                        </v-button>
                    </div>
                    <div class="p-2 w-1/2 sm:max-w-none sm:w-auto">
                        <v-button
                            class="w-full"
                            color="teal"
                            href="https://github.com/scottbedard"
                            target="_blank">
                            GitHub
                        </v-button>
                    </div>
                </nav>
            </div>
        </v-margin>
    </v-page>
</template>
