<template>
  <component
    class="bg-gray-300 font-bold px-4 py-2 rounded-md text-gray-600 tracking-wide unstyled-link uppercase hover:bg-gray-400 hover:text-gray-800"
    :is="is"
    :href="href">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    href: {
      type: String,
    },
  },
  setup(props) {
    const is = computed(() => {
      return props.href ? 'a' : 'button'
    })

    return {
      is
    }
  },
});
</script>