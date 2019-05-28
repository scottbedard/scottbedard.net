<style lang="scss" scoped>
    $hamburger-layer-color: #3a3a3a;
    $hamburger-layer-height: 2px;
    $hamburger-layer-width: 1.75rem;
    $hamburger-layer-spacing: 6px;
    $hamburger-padding-x: inherit;
    $hamburger-padding-y: inherit;

    // https://github.com/jonsuh/hamburgers
    @import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers';


    .hamburger-inner,
    .hamburger-inner:before,
    .hamburger-inner:after {
        transition: background-color 250ms ease-in-out;
    }

    .is-active {
        .hamburger-inner,
        .hamburger-inner:before,
        .hamburger-inner:after {
            background-color: #f8fafc !important;
        }
    }

    .popover {
        background-color: rgba(#3d4852, 0);
        border-bottom-left-radius: 9999px;
        height: 0px;
        transition:
            background-color 250ms ease-in-out,
            height 250ms ease-in-out,
            width 250ms ease-in-out;
        width: 0px;

        &.expanded {
            background-color: rgba(#3d4852, 0.975);
            height: 1536px;
            width: 1536px;

            .popover-inner {
                transform: translateY(0px);
            }
        }
    }

    .popover-inner {
        @apply flex flex-wrap items-center justify-center;
        transform: translateY(-2rem);
        transition: transform 250ms ease-in-out;

        a {
            @apply block p-4 text-center text-lg text-grey-lightest;
        }
    }
</style>

<template>
    <div>
        <!-- hamburger -->
        <button
            aria-controls="mobile_navigation"
            aria-label="Menu"
            class="fixed hamburger hamburger--spin-r h-16 px-4 pin-t pin-r z-50 focus:outline-none"
            type="button"
            :class="{ 'is-active': expanded }"
            @click="toggle">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>

        <!-- nav -->
        <div
            class="popover fixed overflow-hidden pin-t pin-r"
            ref="popover"
            :class="{ expanded }">
            <div class="popover-inner absolute flex h-screen items-center justify-center pin-t pin-r w-screen">
                <div>
                    <router-link :to="{ name: 'experiments' }">Experiments</router-link>
                    <router-link :to="{ name: 'skills' }">Skills</router-link>
                    <router-link :to="{ name: 'blog' }">Blog</router-link>
                    <router-link :to="{ name: 'contact' }">Contact</router-link>
                    <a href="https://github.com/scottbedard" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    clearAllBodyScrollLocks,
    disableBodyScroll,
    enableBodyScroll,
} from 'body-scroll-lock';

export default {
    data() {
        return {
            expanded: false,
        };
    },
    destroyed() {
        console.log('clear');
        clearAllBodyScrollLocks();
    },
    methods: {
        toggle() {
            this.expanded = !this.expanded;
        },
    },
    watch: {
        expanded(expanded) {
            if (expanded) {
                disableBodyScroll(this.$refs.popover);
            } else {
                enableBodyScroll(this.$refs.popover);
            }
        },
        $route: {
            deep: true,
            handler() {
                this.expanded = false;
            },
        },
    },
};
</script>
