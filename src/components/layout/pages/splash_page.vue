<style lang="scss" scoped>@import 'core';
    .v-splash-page {
        align-items: center;
        bottom: 0;
        display: flex;
        font-family: 'Lato', sans-serif;
        font-size: 36px;
        font-weight: 300;
        justify-content: center;
        padding: 20px;
        position: absolute;
        top: 0;
        width: 100%;

        @include bp-prop('font-size', 36px, false, 38px, 48px);
        @include bp-prop('line-height', 48px, false, 54px, 60px);
        @include transition('font-size, line-height');
    }
</style>

<template>
    <div class="v-splash-page">
        <slot></slot>
    </div>
</template>
