<style lang="postcss">
html {
  @apply flex h-full items-center justify-center w-full;
}
</style>

<template>
  <Logo size="24" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from './components/logo.vue';

export default defineComponent({
  components: {
    Logo
  }
})
</script>
