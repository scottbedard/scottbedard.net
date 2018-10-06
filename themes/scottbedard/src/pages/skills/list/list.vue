<template>
    <div>
        Hello world
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('skills', [
            'skills',
        ]),
    },
};
</script>
