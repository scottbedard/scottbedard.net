<style lang="scss" scoped>@import 'core';
    form {
        > div {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 2px;
        }

        .submit {
            text-align: right;
            .error {
                color: $red;
                margin-top: 5px;
            }
        }
    }
</style>

<template>
    <form @submit.prevent="onFormSubmitted">
        <div>
            <label for="name">Name</label>
            <input
                id="name"
                placeholder="Name"
                required
                type="text"
                v-model="name">
        </div>
        <div>
            <label for="email">Email address</label>
            <input
                id="email"
                placeholder="Email address"
                required
                type="email"
                v-model="email">
        </div>
        <div>
            <label for="body">Message</label>
            <textarea
                id="body"
                placeholder="What's on your mind?"
                required
                v-model="body">
            </textarea>
        </div>
        <div class="submit">
            <v-button type="submit" color="green">
                <div v-if="isLoading">
                    <v-button-spinner></v-button-spinner>
                    <span>Sending...</span>
                </div>
                <div v-else>Send message</div>
            </v-button>
            <div v-if="true" class="error">
                {{ error }}
            </div>
        </div>
    </form>
</template>

<script>
    import ContactResource from 'src/resources/contact';

    export default {
        data() {
            return {
                body: '',
                email: '',
                isLoading: false,
                isSent: false,
                name: '',
            };
        },
        methods: {
            onFormSubmitted() {
                let payload = {
                    body: this.body,
                    email: this.email,
                    error: null,
                    name: this.name,
                    subject_id: null,
                };

                this.error = null;
                this.isLoading = true;
                ContactResource.sendMessage(payload)
                    .then(this.onSendComplete)
                    .catch(this.onSendFailed)
                    .then(() => this.isLoading = false);
            },
            onSendComplete() {
                this.$emit('submit');
            },
            onSendFailed() {
                this.error = 'Whoa, something went wrong, please try again.';
            },
        },
    };
</script>
