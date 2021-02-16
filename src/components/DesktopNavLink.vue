<template>
  <component
    v-text="text"
    class="hover:text-red-500"
    :is="is"
    :to="to" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const is = computed(() => {
      return 'RouterLink'
    })

    return {
      is
    }
  },
  props: {
    text: String,
    to: [Object, String]
  }
})
</script>
