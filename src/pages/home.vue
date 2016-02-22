<style lang="sass" scoped> @import 'core';
    p {
        @include bp-prop(font-size, 22px, 28px, 34px);
        &:not(:first-of-type) { margin-top: $layout-padding }
    }
</style>

<template>
    <div class="page">
        <v-ribbon></v-ribbon>
        <p>Hi there,</p>
        <p>I'm Scott, and I build cool things at <a href="http://spyfu.com">SpyFu</a>.</p>
    </div>
</template>

<script>
    import HeaderState from 'state/header';

    export default {

    };
</script>
