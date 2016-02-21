<template>
    <div class="page splash">
        <v-ribbon :reset="150"></v-ribbon>
        <p>{{ notFoundMessage }}</p>
    </div>
</template>

<script>
    import HeaderState from 'state/header';

    export default {

        /**
         * @type {Object}
         */
        computed: {

            /**
             * Return a 404 message
             *
             * @return {String}
             */
            notFoundMessage() {
                let messages = [
                    'You shouldn\'t be here...',
                    'I could have put a page here, but I didn\'t.',
                    'One of us screwed up, I hope it\'s not me...',
                    'There is no page here, but you can still enjoy this colorful nonsense.',
                ];

                return messages[Math.floor(Math.random() * messages.length)];
            },
        },
    };
</script>
