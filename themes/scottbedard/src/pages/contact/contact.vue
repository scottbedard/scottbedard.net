<template>
    <v-page padded>
        <v-margin padded>
            <v-background-text>
                <h1 class="font-thin leading-normal text-3xl text-grey-darkest max-w-lg mb-0 mx-auto text-center md:text-3xl">
                    Send me a message
                </h1>
                <p class="font-thin leading-normal max-w-md mb-8 mx-auto text-center text-grey-darkest">
                    I do my best to get back as quickly as possible.
                </p>
                <div class="max-w-sm mx-auto">
                    <v-card>
                        <form class="p-8" @submit.prevent="submit">
                            <label class="block mb-8">
                                <div class="font-bold mb-1 text-grey text-xs uppercase">Email Address</div>
                                <input
                                    v-model="from"
                                    autofocus
                                    class="border border-grey-light leading-normal outline-none p-4 rounded w-full"
                                    placeholder="Enter your email address"
                                    required
                                    type="email"
                                    :disabled="loading"
                                />
                            </label>
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
                            <v-fade-transition>
                                <p
                                    v-if="errorMsg"
                                    v-text="errorMsg"
                                    class="bg-red-lightest mb-8 p-4 rounded text-sm text-red-darkest"
                                />
                            </v-fade-transition>
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
import { get } from 'lodash-es';

export default {
    data() {
        return {
            body: '',
            errorMsg: '',
            from: '',
            loading: false,
            subject: '',
        };
    },
    mounted() {
        // focus the first input
        this.$el.querySelector('input').focus();
    },
    methods: {
        submit() {
            this.errorMsg = '';
            this.loading = true;

            postMessage({
                body: this.body,
                from: this.from,
                subject: this.subject,
            }).then((response) => {
                // success
                this.$router.replace({ name: 'contact-done' });
            }, (err) => {
                const errorMsg = get(err, 'response.data.error', '');
                const statusCode = get(err, 'response.status', 500);

                // unprocessable entity
                if (statusCode === 422) {
                    this.errorMsg = errorMsg;
                }
                
                // unknown error
                else {
                    this.errorMsg = 'Well, this is embarassing... an unknown error happened. Try contacting me on GitHub.';
                }
            }).finally(() => {
                // complete
                this.loading = false;
            });
        },
    },
};
</script>