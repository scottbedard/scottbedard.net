<template>
    <div class="pt-16">
        <header class="fixed flex h-16 items-center justify-between pin px-4" padded>
            <!-- title -->
            <div class="text-xl">
                <router-link :to="{ name: 'home' }">
                    <span class="xs:hidden">sb</span>
                    <span class="hidden xs:inline">scottbedard.net</span>
                </router-link>
                <span class="font-thin text-grey-darker">
                    <span> / </span>
                    <span>{{ header }}</span>
                </span>
            </div>

            <nav class="md:hidden">
                <!-- mobile nav -->
                <v-mobile-nav />
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
