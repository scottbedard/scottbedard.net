<template>
  <svg
    class="feather feather-box"
    fill="#fff"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    :height="size"
    :stroke-width="stroke"
    :viewBox="`0 0 24 24`"
    :width="size">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    size: {
      default: '20',
      type: String
    },
    stroke: {
      default: '2',
      type: String
    }
  }
})
</script>
