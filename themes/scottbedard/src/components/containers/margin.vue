<template>
    <div 
        class="max-w-4xl mx-auto" 
        :class="{
            'p-4': padded,   
        }">
        <slot />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        padded: {
            default: false,
            type: Boolean,
        },
    },
});
</script>
