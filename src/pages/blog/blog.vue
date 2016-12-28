<style lang="scss" scoped>@import 'core';

</style>

<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
