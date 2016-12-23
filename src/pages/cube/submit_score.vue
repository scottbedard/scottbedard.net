<style lang="scss" scoped>@import 'core';
    div {
        margin: 20px 0;
    }

    p {
        font-size: 32px;
        font-weight: 300;
        margin: 0;
        span { font-weight: 400 }
    }

    form {
        margin-top: 20px;
        text-align: right;
        a { margin-right: 12px }
        input { margin-bottom: 20px; width: 100% }
    }
</style>

<template>
    <div>
        <p class="congrats">Nice job, you solved the cube in <span>{{ time }}</span></p>
        <form @submit.prevent="onFormSubmitted">
            <input v-model="name" placeholder="Enter your name" ref="input">
            <a href="#" @click.prevent="onCancelClicked">Cancel</a>
            <v-button color="green">Submit solve</v-button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
            };
        },
        computed: {
            displayMilliseconds() {
                let ms = Math.floor(this.elapsed % 1000 / 10);
                return ms < 10 ? `0${ ms }` : ms;
            },
            displaySeconds() {
                let seconds = Math.floor(this.seconds % 60);
                return seconds < 10 ? `0${ seconds }` : seconds;
            },
            elapsed() {
                return this.solve.end - this.solve.start;
            },
            minutes() {
                return Math.floor(this.seconds / 60);
            },
            seconds() {
                return Math.floor(this.elapsed / 1000);
            },
            time() {
                return `${ this.minutes }:${ this.displaySeconds }.${ this.displayMilliseconds }`;
            },
        },
        methods: {
            focus() {
                setTimeout(() => this.$refs.input.focus(), 200);
            },
            onCancelClicked() {
                this.$emit('dismiss');
            },
            onFormSubmitted() {
                console.log ('submit');
            },
        },
        props: [
            'solve',
        ],
    };
</script>
