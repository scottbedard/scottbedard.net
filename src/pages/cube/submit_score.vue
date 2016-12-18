<style lang="scss" scoped>@import 'core';
    .congrats {
        font-size: 32px;
    }

    .message {
        font-size: 18px;

        a {
            color: $red;

            &:hover {
                color: darken($red, 10%);
                text-decoration: underline;
            }
        }
    }
</style>

<template>
    <div>
        <p class="congrats">Nice job, you solved the cube in 0:00.00</p>
        <p class="message">If you'd like to submit your solve, feel free to <a href="#" @click.prevent="onGithubClicked">sign in with GitHub</a>.</p>
    </div>
</template>

<script>
    export default {
        methods: {
            onGithubClicked() {
                console.log ('ok...');
            },
        },
    };
</script>
