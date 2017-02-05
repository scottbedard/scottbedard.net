<style lang="scss" scoped>@import 'core';
    .v-page {
        margin: 0 auto;
        max-width: $layout-inner-width;
        padding: $layout-inner-padding;
        width: 100%;

        > div {
            background-color: rgba($white, 0.9);
            border-radius: 3px;
            padding: $layout-inner-padding;

            &.is-relative {
                position: relative;
            }
        }
    }
</style>

<template>
    <div class="v-page">
        <div :class="{ 'is-relative': relative }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            relative: { type: Boolean, default: false },
        },
    };
</script>
