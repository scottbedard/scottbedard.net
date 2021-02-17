<style lang="postcss">
@tailwind base;
@tailwind utilities;

a {
  @apply text-red-500 hover:text-red-600;
}
</style>

<template>
  <Ribbon style="z-index: -1" />

  <Margin padded>
    <RouterView />
  </Margin>

  <!-- <header class="flex h-16 items-center justify-between relative">
    <RouterLink
      class="flex font-bold items-center text-2xl hover:text-red-500"
      :to="{ name: 'home' }">
      <Logo class="mr-2" size="22" />
      scott bedard
    </RouterLink>

    <span class="absolute right-0 z-10 sm:hidden" @click="toggleNav">
      <HamburgerNav :active="navIsExpanded" />
    </span>

    <nav class="gap-x-12 hidden px-6 sm:flex lg:gap-x-16">
      <DesktopNavLink text="Thoughts" :to="{ name: 'articles' }" />
      <DesktopNavLink text="Experiments" :to="{ name: 'articles' }" />
      <DesktopNavLink text="Contact" :to="{ name: 'articles' }" />
    </nav>

    <Transition 
      enter-active-class="duration-100 ease-in-out transition-opacity"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-100 ease-in-out transition-opacity"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-if="navIsExpanded"
        class="bg-dark-75 fixed h-full left-0 top-0 w-full sm:hidden"
        @click="collapseNav">
        <nav
          class="absolute bg-gray-200 h-full p-4 right-0 shadow-xl top-0 w-72"
          @click.stop>
          Hello from the mobile nav
        </nav>
      </div>
    </Transition>
  </header> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router';
import DesktopNavLink from './components/DesktopNavLink.vue'
import HamburgerNav from './components/HamburgerNav.vue'
import Logo from './components/Logo.vue'
import Margin from './components/Margin.vue'
import Ribbon from './components/Ribbon.vue'

export default defineComponent({
  components: {
    DesktopNavLink,
    HamburgerNav,
    Logo,
    Margin,
    Ribbon,
    RouterLink,
    RouterView
  },
  setup() {
    const route = useRoute()

    const navIsExpanded = ref(false)

    const collapseNav = () => navIsExpanded.value = false

    const toggleNav = () => navIsExpanded.value = !navIsExpanded.value

    return {
      collapseNav,
      navIsExpanded,
      route,
      toggleNav
    }
  }
})
</script>
