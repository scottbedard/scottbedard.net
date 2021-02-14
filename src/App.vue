<style lang="postcss">
@tailwind base;
@tailwind utilities;

html {
  @apply flex h-full items-center justify-center w-full;
}
</style>

<template>
  <Ribbon />
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Logo from './components/Logo.vue'
import Ribbon from './components/Ribbon.vue'

export default defineComponent({
  components: {
    Logo,
    Ribbon,
    RouterView
  }
})
</script>
