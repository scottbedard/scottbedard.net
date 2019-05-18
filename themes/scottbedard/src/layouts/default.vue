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
                        <router-link class="heading" :to="{ name: 'home' }">
                            <span class="xs:hidden">sb</span>
                            <span class="hidden xs:inline">scottbedard</span>
                        </router-link>
                        <span class="inline-flex font-light text-grey-darker">
                            <span class="mx-2">/</span>
                            <router-link class="heading" :to="$route.meta.headerRoute || ''">{{ header }}</router-link>
                        </span>
                    </div>

                    <!-- mobile nav -->
                    <nav class="hidden items-center md:flex">
                        <router-link
                            class="mr-8 text-grey-dark text-2xl hover:text-grey-darker"
                            title="Random thoughts about things"
                            :to="{ name: 'blog' }">
                            <i class="fa fa-rss"></i>
                        </router-link>
                        <router-link
                            class="mr-8 text-grey-dark text-2xl hover:text-grey-darker"
                            title="Check out the tools I enjoy using"
                            :to="{ name: 'skills' }">
                            <i class="fa fa-bullseye"></i>
                        </router-link>
                        <router-link
                            class="mr-8 text-grey-dark text-2xl hover:text-grey-darker"
                            title="See my code experiments"
                            :to="{ name: 'experiments' }">
                            <i class="fa fa-rocket"></i>
                        </router-link>
                        <router-link
                            class="mr-8 text-grey-dark text-2xl hover:text-grey-darker"
                            title="Get in touch with me"
                            :to="{ name: 'contact' }">
                            <i class="fa fa-envelope-o"></i>
                        </router-link>
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
