<style lang="scss" scoped>@import 'core';
    div {
        text-transform: lowercase;
    }

    .me {
        font-weight: 400;
    }
</style>

<template>
    <div>
        <router-link to="/" class="me">scottbedard</router-link>
        <span v-if="subtitle" class="subtitle">/ {{ subtitle }}</span>
    </div>
</template>

<script>
    import RouterState from 'src/state/router';

    export default {
        data() {
            return {
                Router: RouterState.state,
            };
        },
        computed: {
            subtitle() {
                return this.Router.subtitle || null;
            },
        },
    };
</script>
