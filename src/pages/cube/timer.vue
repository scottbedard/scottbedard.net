<template>
    <div>
        {{ minutes }}:{{ displaySeconds }}.{{ displayMilliseconds }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                elapsed: this.start,
                interval: setInterval(this.tick, 70),
            };
        },
        computed: {
            displayMilliseconds() {
                let ms = Math.floor(this.elapsed % 1000 / 10);

                return ms < 10 ? `0${ ms }` : ms;
            },
            displaySeconds() {
                let seconds = Math.floor(this.seconds % 60);

                return seconds < 10
                    ? '0' + seconds
                    : seconds;
            },
            minutes() {
                return Math.floor(this.seconds / 60);
            },
            seconds() {
                return Math.floor(this.elapsed / 1000);
            },
        },
        methods: {
            end() {
                clearInterval(this.interval);
            },
            tick() {
                this.elapsed = Date.now() - this.start;
            },
        },
        props: [
            'start',
        ],
    };
</script>
