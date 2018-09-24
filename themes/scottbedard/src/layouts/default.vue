<template>
    <div>
        <v-ribbon />
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ribbonComponent from '@/components/ribbon.vue';

export default Vue.extend({
    components: {
        'v-ribbon': ribbonComponent,
    },
});
</script>
