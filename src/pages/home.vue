<style lang="scss" scoped>@import 'core';
    .hello {
        font-family: 'Lato', sans-serif;
        font-size: 36px;
        font-weight: 300;
        padding: 20px;

        @include bp-prop('font-size', 36px, false, 38px, 48px);
        @include bp-prop('line-height', 48px, false, 54px, 60px);
        @include transition('font-size, line-height');
    }
</style>

<template>
    <div class="page splash">
        <div class="hello">
            <div class="greeting">Hi there,</div>
            <div class="message">I'm Scott, and I build cool things at <a href="https://spyfu.com">SpyFu</a>.</div>
        </div>
    </div>
</template>
