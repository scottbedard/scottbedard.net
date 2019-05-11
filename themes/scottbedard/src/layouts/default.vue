<template>
    <div class="pt-16">
        <header class="bg-grey-lighter fixed flex h-16 items-center justify-between pin px-4" padded>
            <!-- title -->
            <div class="text-xl">
                <router-link :to="{ name: 'home' }">
                    scottbedard.net
                </router-link>
                <span class="font-thin text-grey-darker">
                    <span> / </span>
                    <span>{{ header }}</span>
                </span>
            </div>

            <nav>
                <!-- mobile nav -->
                <div class="md:hidden">
                    <v-mobile-nav />
                </div>

                <!-- desktop nav -->
                <div class="hidden md:block">
                    <router-link :to="{ name: 'skills' }">Skills</router-link>
                </div>
            </nav>
        </header>

        <!-- main content -->
        <main>
            <v-fade-transition>
                <router-view />
            </v-fade-transition>
        </main>
    </div>
</template>

<script>
import { resolveProperty } from '@/app/utils/object';
import mobileNavComponent from './mobile_nav/mobile_nav.vue';

export default {
    components: {
        'v-mobile-nav': mobileNavComponent,
    },
    computed: {
        header() {
            return resolveProperty(this.$route.meta, 'header') || this.$route.name;
        },
    },
};
</script>
