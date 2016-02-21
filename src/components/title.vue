<style lang="sass" scoped> @import 'core';
    div {
        font-weight: 400;
        @include bp-prop(font-size, 26px, 30px, 34px);
        @include bp-prop(line-height, 32px, 36px, 40px);
        @include bp-prop(min-height, 32px, 36px, 40px);
        @include bp-prop(padding-right, 2px, 3px, 4px);
        @include transition('font-size');

        span {
            font-weight: 300;
        }

        &.caret {
            animation: blinking 1.4s infinite;
            border-right: 2px solid transparent;
            @keyframes blinking {
                from, to { border-color: transparent }
                20% { border-color: transparent }
                30% { border-color: #ccc }
                70% { border-color: #ccc }
                80% { border-color: transparent }
            }
        }
    }

    a:hover {
        text-decoration: none;
    }
</style>

<template>
    <div v-bind:class="{ 'caret': isTyping === false }">
        <a v-link="{ name: 'home' }">{{ typedName }}</a>
        <span>{{ typedTitle }}</span>
    </div>
</template>

<script>
    export default {

        /**
         * @return {Object}
         */
        data() {
            return {
                delay: 2500,
                isTyping: false,
                nameIsTyped: false,
                speed: 100,
                typedName: '',
                typedTitle: '',
            };
        },

        /**
         * @type {Array}
         */
        props: ['title'],

        /**
         * Start typing the title
         *
         * @return {void}
         */
        attached() {
            if (!this.nameIsTyped) {
                setTimeout(this.typeName.bind(this), this.delay);
            }
        },

        /**
         * @type {Object}
         */
        methods: {

            /**
             * Erase the current title
             *
             * @return {Promise}
             */
            erase() {
                return new Promise(resolve => {
                    let backspace = () => {
                        this.isTyping = true;
                        if (this.typedTitle.length > 0 && !this.titleStartsWith(this.title)) {
                            setTimeout(() => {
                                this.typedTitle = this.typedTitle.slice(0, -1);
                                backspace();
                            }, this.speed);
                        } else {
                            this.isTyping = false;
                            resolve();
                        }
                    }

                    backspace();
                });
            },

            /**
             * Determine if the title starts with what is already typed
             *
             * @param  {String} value
             * @return {Boolean}
             */
            titleStartsWith(value) {
                return value.slice(0, this.typedTitle.length) === this.typedTitle;
            },

            /**
             * Type a string
             *
             * @param  {String}     property    The data property to type to
             * @param  {String}     value       String to type
             * @return {Promise}
             */
            type(property, value) {
                return new Promise(resolve => {
                    this.isTyping = true;
                    let keystroke = characters => {
                        this[property] += characters.shift();
                        if (characters.length > 0) {
                            setTimeout(keystroke, this.speed, characters);
                        } else {
                            this.isTyping = false;
                            resolve();
                        }
                    }

                    keystroke(value.split(''));
                });
            },

            /**
             * Type my name
             *
             * @return {Promise}
             */
            typeName() {
                this.type('typedName', 'scottbedard').then(() => {
                    this.nameIsTyped = true;
                    this.typeTitle();
                });
            },

            /**
             * Type the title
             *
             * @return {void}
             */
            typeTitle() {
                this.erase().then(() => {
                    if (this.title) {
                        this.type('typedTitle', this.title.slice(this.typedTitle.length)).then(() => {
                            if (this.title !== this.typedTitle) {
                                this.typeTitle();
                            }
                        });
                    }
                });
            },
        },

        /**
         * @type {Object}
         */
        watch: {

            /**
             * Type the title when it changes
             *
             * @return {void}
             */
            title() {
                if (this.nameIsTyped && !this.isTyping) {
                    this.typeTitle();
                }
            },
        },
    };
</script>
