<style lang="scss" scoped>@import 'core';
    .v-modal {
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        opacity: 0;
        position: fixed;
        top: 0;
        visibility: hidden;
        width: 100%;
        z-index: 1;
        @include transition('opacity, visibility');

        &.is-visible {
            opacity: 1;
            visibility: visible;

            .content {
                transform: translateY(0px);
            }
        }
    }

    .content {
        background-color: #eee;
        border-radius: 3px;
        margin: 20px;
        padding: 10px 20px;
        transform: translateY(-10px);
        max-width: 768px;
        width: 100%;
        @include transition(transform);
    }
</style>

<template>
    <div
        class="v-modal"
        :class="{ 'is-visible': isVisible }"
        @click="onBackdropClicked">
        <div class="content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: false,
            };
        },
        methods: {
            hide() {
                this.isVisible = false;
            },
            onBackdropClicked() {
                this.hide();
            },
            show() {
                this.isVisible = true;
            },
        },
    };
</script>
