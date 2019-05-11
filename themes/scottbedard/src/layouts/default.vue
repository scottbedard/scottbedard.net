<template>
    <div class="pt-16">
        <header
            class="bg-white fixed flex h-16 items-center justify-between pin px-4 shadow transition-transform ty-0 z-10"
            :class="{
                '-ty-full': scrollY > 100 && scrollDown,
            }"
            :padded="true">
            <!-- title -->
            <div class="text-xl">
                <router-link :to="{ name: 'home' }">
                    <span class="xs:hidden">sb</span>
                    <span class="hidden xs:inline">scottbedard.net</span>
                </router-link>
                <span class="font-thin text-grey-darker">
                    <span>&nbsp;/&nbsp;</span>
                    <span>{{ header }}</span>
                </span>
            </div>

            <!-- mobile nav -->
            <nav class="md:hidden">
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
import { get } from 'lodash-es';
import { bindExternalEvent } from 'spyfu-vue-utils';
import mobileNavComponent from './mobile_nav/mobile_nav.vue';

export default {
    created() {
        bindExternalEvent(this, window, 'scroll', this.onScroll);
    },
    data() {
        return {
            scrollDown: true,
            scrollY: 0,
        };
    },
    components: {
        'v-mobile-nav': mobileNavComponent,
    },
    computed: {
        header() {
            return get(this.$route.meta, 'header') || this.$route.name;
        },
    },
    methods: {
        onScroll() {
            this.scrollY = window.scrollY;
        },
    },
    watch: {
        scrollY(newScrollY, oldScrollY) {
            this.scrollDown = newScrollY > oldScrollY;
        },
    },
};
</script>
