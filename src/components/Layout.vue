<template>
  <div>
    <header class="h-16 flex items-center">
      <RouterLink
        class="flex items-center unstyled-link hover:text-red-500"
        :to="{ name: 'home' }">
        <Logo />
        <span class="font-bold ml-1 text-lg">sb</span>
      </RouterLink>
    </header>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router'
import Logo from './Logo.vue'

export default defineComponent({
  components: {
    Logo,
    RouterLink
  },
  name: 'Layout'
})
</script>
