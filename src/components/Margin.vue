<template>
  <div
    class="max-w-screen-2xl mx-auto w-full"
    :class="{
      'px-4': padded
    }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    padded: Boolean
  }
})
</script>
