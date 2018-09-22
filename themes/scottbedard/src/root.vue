<style lang="scss" src="./scss/tailwind.scss"></style>

<template>
    <div id="app">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'skills' }">Skills</router-link>

        <div>
            <router-view />
        </div>
    </div>
</template>
