let Vue = require('vue');

//
// Typewriter
//
Vue.component('v-typewriter', {

    /**
     * @type {String}   Component template
     */
    template: require('./template'),

    /**
     * @type {Object}   Component properties
     */
    props: {
        backspaceSpeed: { type: Number, default: 85 },
        blinkComma:     { type: Number, default: 0 },
        blinkCount:     { type: Number, default: 2 },
        blinkForever:   { type: Boolean, default: false },
        blinkPeriod:    { type: Number, default: 0 },
        blinkSpeed:     { type: Number, default: 1400 },
        commaPause:     { type: Number, default: 0 },
        delay:          { type: Number, default: 0 },
        finalMessage:   { type: String, default: null },
        message:        { type: String, default: '' },
        periodPause:    { type: Number, default: 0 },
        typeSpeed:      { type: Number, default: 85 },
    },

    /**
     * Component data
     *
     * @return {Object}
     */
    data() {
        return {
            isBlinking: false,
            isTicking: false,
            typed: '',
        };
    },

    /**
     * Start typing
     *
     * @return {void}
     */
    ready() {
        setTimeout(this.tick, this.delay);
    },

    /**
     * @type {Object}   Component watchers
     */
    watch: {

        /**
         * When the message is changed, trigger a retype
         *
         * @return {void}
         */
        message() {
            if (this.isTicking) {
                this.retype();
            }
        },
    },

    /**
     * @type {Object}   Component methods
     */
    methods: {

        /**
         * Remove an old message and type a new one
         *
         * @return {void}
         */
        retype() {
            let backspace = setInterval(() => {
                this.typed = this.typed.substring(0, this.typed.length - 1);
                if (this.typed.length === 0 || this.message.indexOf(this.typed) === 0) {
                    clearInterval(backspace);
                    this.tick();
                }
            }, this.backspaceSpeed);
        },

        /**
         * Perform the next action
         *
         * @return {void}
         */
        tick() {
            if (this.blinkCount > 0) {
                this.blinkCount--;
                this.isBlinking = true;
                setTimeout(this.tick, this.blinkSpeed);
                return;
            }

            this.isBlinking = false;
            this.isTicking = true;
            this.typeNextCharacter();
        },

        /**
         * Type the next character
         *
         * @return {void}
         */
        typeNextCharacter() {
            if (this.typed.length < this.message.length) {
                let nextChar = this.message.charAt(this.typed.length),
                    isLastChar = this.typed.length === (this.message.length - 1),
                    timeout = this.typeSpeed;

                if (isLastChar) {
                    timeout = 0;
                } else if (nextChar === ',') {
                    this.blinkCount = this.blinkComma;
                    timeout = this.commaPause;
                } else if (nextChar === '.') {
                    this.blinkCount = this.blinkPeriod;
                    timeout = this.periodPause;
                } else {
                    let variation = 20;
                    timeout += variation - (Math.floor(Math.random() * variation * 2) - 0);
                }

                this.typed += nextChar;
                return setTimeout(this.tick, timeout);
            }

            if (this.finalMessage !== null) {
                this.typed = this.finalMessage;
            }

            if (this.blinkForever) {
                this.isBlinking = true;
            }
        },
    },
});
