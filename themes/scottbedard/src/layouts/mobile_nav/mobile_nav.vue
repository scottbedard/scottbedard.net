<style lang="scss" scoped>
    $hamburger-layer-color: #3a3a3a;
    $hamburger-layer-height: 2px;
    $hamburger-layer-width: 1.75rem;
    $hamburger-layer-spacing: 6px;
    $hamburger-padding-x: inherit;
    $hamburger-padding-y: inherit;

    // https://github.com/jonsuh/hamburgers
    @import '../../../node_modules/hamburgers/_sass/hamburgers/hamburgers';

    .is-active {
        .hamburger-inner,
        .hamburger-inner:before,
        .hamburger-inner:after {
            background-color: #f00;
        }
    }
</style>

<template>
    <div>
        <button
            aria-controls="mobile_navigation"
            aria-label="Menu"
            class="fixed hamburger hamburger--spin-r h-16 px-4 pin-t pin-r z-50 focus:outline-none"
            type="button"
            :class="{ 'is-active': isExpanded }"
            @click="toggle">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: false,
        };
    },
    methods: {
        toggle() {
            this.isExpanded = !this.isExpanded;
        },
    },
};
</script>
