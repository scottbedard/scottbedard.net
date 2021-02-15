<style lang="scss" scoped>
$hamburger-padding-x: 0.5rem !default;
$hamburger-padding-y: 1rem !default;
$hamburger-layer-width: 2rem !default;
$hamburger-layer-height: 2px !default;
$hamburger-layer-spacing: 6px !default;
$hamburger-layer-color: #111827 !default;
$hamburger-layer-border-radius: 4px !default;
$hamburger-hover-opacity: 1 !default;
$hamburger-active-layer-color: $hamburger-layer-color !default;
$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

// to use css filters as the hover effect instead of opacity,
// set $hamburger-hover-use-filter to true and change the
// value of $hamburger-hover-filter accordingly
$hamburger-hover-use-filter: false !default;
$hamburger-hover-filter: opacity(50%) !default;
$hamburger-active-hover-filter: $hamburger-hover-filter !default;

$hamburger-types: (
  // 3dx,
  // 3dx-r,
  // 3dy,
  // 3dy-r,
  // 3dxy,
  // 3dxy-r,
  // arrow,
  // arrow-r,
  // arrowalt,
  // arrowalt-r,
  // arrowturn,
  // arrowturn-r,
  // boring,
  // collapse,
  // collapse-r,
  elastic,
  // elastic-r,
  // emphatic,
  // emphatic-r,
  // minus,
  // slider,
  // slider-r,
  // spring,
  // spring-r,
  // stand,
  // stand-r,
  // spin,
  // spin-r,
  // squeeze,
  // vortex,
  // vortex-r
) !default;

@import '../../node_modules/hamburgers/_sass/hamburgers/hamburgers';
</style>

<template>
  <button
    aria-controls="navigation"
    aria-label="Menu"
    class="hamburger hamburger--elastic focus:outline-none"
    type="button"
    :class="{
      'is-active': active
    }">
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    active: Boolean
  }
})
</script>
