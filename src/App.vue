<style lang="postcss">
html {
  @apply flex h-full items-center justify-center w-full;
}
</style>

<template>
  <h1 class="text-4xl">Soon...</h1>
  <Ribbon />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './components/Logo.vue'
import Ribbon from './components/Ribbon.vue'

export default defineComponent({
  components: {
    Logo,
    Ribbon
  }
})
</script>
