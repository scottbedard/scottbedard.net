<style lang="scss" scoped>
    div {
        $color: rgba(#f1f5f8, 0.5);
        background-color: $color;
        box-shadow: 0 0 2rem 2rem $color;
    }
</style>

<template functional>
    <div>
        <slot />
    </div>
</template>
