<template>
    <div>
        {{ seconds - elapsed }}
    </div>
</template>

<script>
    export default {
        created() {
            this.setCountdownTimeouts();
        },
        data() {
            return {
                elapsed: 0,
            };
        },
        methods: {
            onElapsedChanged(elapsed) {
                if (elapsed == this.seconds) {
                    this.$emit('complete');
                }
            },
            setCountdownTimeouts() {
                for (let i = 0; i <= this.seconds; i++) {
                    setTimeout(() => this.elapsed = i, i * 1000);
                }
            },
        },
        props: [
            'seconds',
        ],
        watch: {
            elapsed: 'onElapsedChanged',
        },
    };
</script>
