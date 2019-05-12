<template>
    <div :class="{ 'py-20': padded }">
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
