<style lang="scss" scoped>@import 'core';
    .v-submit-solve {
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

    .v-spinner {
        margin-right: 6px;
    }

    .error {
        text-align: right;
        margin-top: 10px;
        color: $red;
    }
</style>

<template>
    <div class="v-submit-solve">
        <!-- Congrats -->
        <p class="congrats">Nice job, you solved the cube in <span>{{ time }}</span></p>

        <!-- Form -->
        <form @submit.prevent="onFormSubmitted">
            <input v-model="name" placeholder="Enter your name" ref="input" :disabled="isLoading">
            <a href="#" @click.prevent="dismiss">Cancel</a>
            <v-button color="green" :disabled="isLoading">
                <v-spinner color="#fff" size="16px" v-if="isLoading"></v-spinner>
                <span v-if="isLoading">Submitting</span>
                <span v-else>Submit solve</span>
            </v-button>
        </form>

        <!-- Error -->
        <div v-if="error" class="error">{{ error }}</div>
    </div>
</template>

<script>
    import CubeResource from 'src/resources/cube';

    export default {
        data() {
            return {
                error: null,
                isLoading: false,
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
            dismiss() {
                this.$emit('dismiss');
            },
            onFormSubmitted() {
                if (this.isLoading) {
                    return;
                }

                this.error = null;
                this.isLoading = true;

                CubeResource.submit({ name: this.name, ...this.solve })
                    .then(this.onSubmitComplete)
                    .catch(this.onSubmitFailed)
                    .then(() => this.isLoading = false);
            },
            onSubmitComplete() {
                this.$emit('submitted');
                this.dismiss();
            },
            onSubmitFailed() {
                this.error = 'Sorry, something went wrong. Please try again.';
            },
        },
        props: [
            'solve',
        ],
    };
</script>
