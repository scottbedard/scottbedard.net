<style lang="postcss">
@tailwind base;
@tailwind utilities;
</style>

<template>
  <Ribbon />

  <Margin padded>
    <header class="flex h-16 items-center justify-between relative">
      <RouterLink
        class="flex items-center"
        :to="{ name: 'home' }">
        <Logo class="mr-2" size="22" />
        <span class="font-bold text-xl">
          scott bedard
        </span>
      </RouterLink>

      <span class="absolute right-0 z-10 sm:hidden">
        <HamburgerNav
          :active="navIsExpanded"
          @click.prevent="toggleNav" />
      </span>

      <nav class="hidden sm:block">
        Hello from the desktop nav
      </nav>

      <div
        v-if="navIsExpanded"
        class="bg-dark-50 fixed h-full left-0 top-0 w-full"
        @click="collapseNav">
        <nav
          class="absolute bg-gray-200 h-full p-4 right-0 shadow top-0 w-72"
          @click.stop>
          Hello from the mobile nav
        </nav>
      </div>
    </header>
  </Margin>

  <RouterView />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HamburgerNav from './components/HamburgerNav.vue';
import Logo from './components/Logo.vue'
import Margin from './components/Margin.vue';
import Ribbon from './components/Ribbon.vue'

export default defineComponent({
  components: {
    HamburgerNav,
    Logo,
    Margin,
    Ribbon,
    RouterLink,
    RouterView
  },
  setup() {
    const navIsExpanded = ref(false)
    const collapseNav = () => navIsExpanded.value = false;
    const toggleNav = () => navIsExpanded.value = !navIsExpanded.value

    return {
      collapseNav,
      navIsExpanded,
      toggleNav
    }
  }
})
</script>
