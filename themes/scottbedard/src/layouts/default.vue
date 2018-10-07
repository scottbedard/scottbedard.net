<template>
    <v-margin padded>
        <header class="flex h-20 items-center justify-between" padded>
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

            <!-- desktop nav -->
            <nav>
                <router-link :to="{ name: 'skills' }">
                    Skills
                </router-link>
            </nav>
        </header>

        <!-- main content -->
        <main class="mb-4">
            <v-fade-transition>
                <router-view />
            </v-fade-transition>
        </main>
    </v-margin>
</template>

<script>
import { resolveProperty } from '@/app/utils/object';

export default {
    computed: {
        header() {
            return resolveProperty(this.$route.meta, 'header') || this.$route.name;
        },
    },
};
</script>
