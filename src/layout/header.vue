<style lang='scss' scoped>@import 'core';
    $height-mobile: 60px;
    $height-tablet: 80px;
    $height-desktop: 100px;

    div {
        min-height: 60px !important;
        position: fixed;
        width: 100%;

        &.is-home {
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
</style>

<template>
    <header :style="{ 'height': `${ wrapperHeight }px` }">
        <div ref='inner' :class="{ 'is-home': isHome }" :style="{ 'height': `${ innerHeight }px` }">
            hello
        </div>
    </header>
</template>

<script>
    import RouterState from 'src/state/router';
    import WindowState from 'src/state/window';

    export default {
        data() {
            return {
                innerMinHeight: 0,
                Router: RouterState.state,
                Window: WindowState.state,
            };
        },
        mounted() {
            let style = window.getComputedStyle(this.$refs.inner);
            this.innerMinHeight = parseInt(style.getPropertyValue('min-height'));
        },
        computed: {
            isDocked() {
                return this.Window.scrollTop > 300;
            },
            isHome() {
                return this.Router.current.path === '/';
            },
            innerHeight() {
                if (!this.isHome) {
                    return null;
                }

                let height = this.Window.height - this.Window.scrollTop;
                return height < 0 ? 0 : height;
            },
            wrapperHeight() {
                if (!this.isHome) {
                    return this.innerMinHeight;
                }

                let height = this.innerHeight + this.Window.scrollTop;
                return height > this.Window.height ? null : height;
            },
        },
    };
</script>
