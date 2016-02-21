<template>
    <div class="page">
        <v-ribbon :reset="150"></v-ribbon>
        Oh no, that page doesn't exist!
    </div>
</template>

<script>
    import HeaderState from 'state/header';

    export default {

        /**
         * Clear the header state
         *
         * @return {void}
         */
        ready() {
            HeaderState.clearTitle();
        },
    };
</script>
