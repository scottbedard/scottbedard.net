<style lang="scss" scoped>@import 'core';
    $button-spacing: 8px;

    div {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -$button-spacing;

        > .v-button {
            flex-basis: auto;
            margin: $button-spacing;
            max-width: 100%;
        }
    }
</style>

<template>
    <div>
        <slot></slot>
    </div>
</template>
