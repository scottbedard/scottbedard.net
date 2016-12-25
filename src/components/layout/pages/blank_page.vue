<style lang="scss" scoped>@import 'core';
    .v-page {
        margin: 0 auto;
        max-width: $layout-inner-width;
        padding: $layout-inner-padding;
        width: 100%;

        > div { padding: $layout-inner-vertical-padding 0 }
    }
</style>

<template>
    <div class="v-page">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
