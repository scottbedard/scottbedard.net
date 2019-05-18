<template>
    <v-page padded>
        <v-margin padded>
            <v-background-text>
                <h1 class="font-thin leading-normal text-3xl text-grey-darkest max-w-lg mb-2 mx-auto text-center md:mb-4 md:text-3xl">
                    Let's get in touch
                </h1>
                <p class="font-thin leading-normal max-w-md mb-8 mx-auto text-center text-grey-darkest">
                    I do my best to get back as quickly as possible. If you're looking
                    for help with an open source project of mine, filing an issue on
                    GitHub is a better way to go.
                </p>
                <div class="max-w-sm mx-auto">
                    <v-card padded>
                        <form @submit.prevent="submit">
                            <label class="block mb-8">
                                <div class="font-bold mb-1 text-grey text-xs uppercase">Subject</div>
                                <input
                                    v-model="subject"
                                    autofocus
                                    class="border border-grey-light leading-normal outline-none p-4 rounded w-full"
                                    placeholder="Enter message subject"
                                    required
                                    type="text"
                                    :disabled="loading"
                                />
                            </label>
                            <label class="block mb-8">
                                <div class="font-bold mb-1 text-grey text-xs uppercase">Message</div>
                                <textarea
                                    v-model="body"
                                    class="border border-grey-light h-48 leading-normal outline-none p-4 resize-y rounded w-full"
                                    placeholder="What's on your mind?"
                                    required
                                    :disabled="loading"
                                />
                            </label>
                            <div class="text-right">
                                <v-button
                                    color="green"
                                    type="submit"
                                    :disabled="loading">
                                    Submit
                                </v-button>
                            </div>
                        </form>
                    </v-card>
                </div>
            </v-background-text>
        </v-margin>
    </v-page>
</template>

<script>
import { postMessage } from '@/app/repositories/messages';

export default {
    data() {
        return {
            loading: false,
            subject: '',
            body: '',
        };
    },
    mounted() {
        // focus the first input
        this.$el.querySelector('input').focus();
    },
    methods: {
        submit() {
            this.loading = true;

            postMessage({
                subject: this.subject,
                body: this.body,
            }).then((response) => {
                // success
                this.$router.replace({ name: 'contact-done' });
            }).finally(() => {
                // complete
                this.loading = false;
            });
        },
    },
};
</script>