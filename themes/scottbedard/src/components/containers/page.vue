<template>
    <div :class="{ 'py-8': padded }">
        <slot />
    </div>
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
