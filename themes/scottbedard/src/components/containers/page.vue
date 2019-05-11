<template>
    <v-margin :padded="padded">
        <slot />
    </v-margin>
</template>

<script>
export default {
    props: {
        padded: {
            default: false,
            type: Boolean,
        },
    },
};
</script>
