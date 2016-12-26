<style lang="scss" scoped>@import 'core';
    .mobile { @include bp-prop(display, inline, false, none) }
    .tablet { @include bp-prop(display, none, false, inline) }


</style>

<template>
    <v-page>
        <h1>Contact</h1>
        <div class="grid padded">
            <div class="cell mobile-12 tablet-6">
                <p>Hi there, fill out the form <span class="mobile">below</span><span class="tablet">on the right</span> and I'll get back to you as soon as possible.</p>
                <p>If you're looking for help with an open source project of mine, filing an issue on <a href="https://github.com/scottbedard">GitHub</a> might be a path to take.</p>
            </div>
            <div class="cell mobile-12 tablet-6">
                <transition name="fade" mode="out-in">
                    <v-form v-if="! isSent" @submit="onFormSubmitted"></v-form>
                    <v-success v-else></v-success>
                </transition>
            </div>
        </div>
    </v-page>
</template>

<script>
    import ContactResource from 'src/resources/contact';

    export default {
        data() {
            return {
                isSent: false,
            };
        },
        components: {
            'v-form': require('./form'),
            'v-success': require('./success'),
        },
        methods: {
            onFormSubmitted() {
                this.isSent = true;
            },
        },
    };
</script>
