<template>
    <div class="pt-16">
        <header
            class="bg-white fixed h-16 pin shadow transition-transform ty-0 z-10"
            :class="{
                '-ty-full': scrollY > 100 && scrollDown,
            }"
            :padded="true">
            <v-margin padded>
                <div class="flex h-16 items-center justify-between">
                    <!-- title -->
                    <div class="text-xl">
                        <router-link :to="{ name: 'home' }">
                            <span class="xs:hidden">sb</span>
                            <span class="hidden xs:inline">scottbedard</span>
                        </router-link>
                        <span class="inline-flex font-thin text-grey-darker">
                            <span class="mx-2 md:mx-4">/</span>
                            <router-link :to="$route.meta.headerRoute || ''">{{ header }}</router-link>
                            <span class="hidden items-center relative md:inline-flex" ref="dropdown">
                                <a
                                    class="px-2 md:px-4"
                                    href="#"
                                    @click.prevent="expandDesktopNav">
                                    <i class="fa fa-angle-down"></i>
                                </a>
                                <transition
                                    enter-class="opacity-0 -ty-8"
                                    enter-to-class="opacity-100 ty-0"
                                    enter-active-class="transition-opacity transition-transform"
                                    leave-class="opacity-100 ty-0"
                                    leave-to-class="opacity-0 -ty-8"
                                    leave-active-class="transition-opacity transition-transform">
                                    <div
                                        v-if="desktopNavExpanded"
                                        class="absolute pt-8 pin-t-full pin-r">
                                        <v-card padded>
                                            <div class="leading-normal">
                                                <router-link class="block text-right" :to="{ name: 'blog' }">Blog</router-link>
                                                <router-link class="block text-right" :to="{ name: 'skills' }">Skills</router-link>
                                                <router-link class="block text-right" :to="{ name: 'experiments' }">Experiments</router-link>
                                            </div>
                                        </v-card>
                                    </div>
                                </transition>
                            </span>
                        </span>
                    </div>

                    <!-- mobile nav -->
                    <nav class="hidden items-center md:flex">
                        <a
                            href="#"
                            class="mr-4 text-grey-dark text-2xl hover:text-grey-darkest"
                            title="Send me a message">
                            <i class="fa fa-envelope-o"></i>
                        </a>
                        <a
                            class="text-grey-dark text-2xl hover:text-grey-darkest"
                            href="https://github.com/scottbedard"
                            target="_blank"
                            title="View GitHub profile">
                            <i class="fa fa-github"></i>
                        </a>
                    </nav>
                    <nav class="md:hidden">
                        <v-mobile-nav />
                    </nav>
                </div>
            </v-margin>
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
import { isForeignClick } from '@/app/utils/dom';
import mobileNavComponent from './mobile_nav/mobile_nav.vue';

export default {
    created() {
        bindExternalEvent(this, document.body, 'click', this.onBodyClick);
        bindExternalEvent(this, window, 'scroll', this.onScroll);
    },
    data() {
        return {
            desktopNavExpanded: false,
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
        collapseDesktopNav() {
            this.desktopNavExpanded = false;
        },
        expandDesktopNav() {
            this.desktopNavExpanded = true;
        },
        onBodyClick(e) {
            if(isForeignClick(e, this.$refs.dropdown)) {
                this.collapseDesktopNav();
            }
        },
        onScroll() {
            this.scrollY = window.scrollY;
        },
    },
    watch: {
        scrollY(newScrollY, oldScrollY) {
            this.scrollDown = newScrollY > oldScrollY;
        },
        $route: {
            deep: true,
            handler: 'collapseDesktopNav',
        },
    },
};
</script>
