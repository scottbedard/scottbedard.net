<template>
  <Layout>
    <div class="max-w-xl">
      <div class="gap-6 grid">
        <p>
          My site background is the result of being bored, and wanting to play with the canvas element. There isn't much going on here from a technical sense. Just generating points across the screen with slightly varying height, and playing connect the dots. Below I've exposed some of the constants involved in building it, take it for a spin!
        </p>
        <div>
          <div class="gap-3 grid sm:grid-cols-2 sm:gap-6">
            <label>
              Vertical randomness: {{ deviation / 500 }}
              <RangeInput
                v-model="deviation"
                :max="500"
                :min="0" />
            </label>
            <label>
              <div>Horizontal gap: {{ horizontalGap }}</div>
              <RangeInput
                v-model="horizontalGap"
                :max="100"
                :min="1" />
            </label>
          </div>
          <a
            class="text-xs"
            href="#"
            @click.prevent="reset">
            Reset
          </a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { deviation, horizontalGap } from '@/components/Ribbon.vue'
import Layout from '@/components/Layout.vue';
import RangeInput from '@/components/RangeInput.vue'

const originalDeviation = deviation.value
const originalPointCoint = horizontalGap.value

export default defineComponent({
  components: {
    Layout,
    RangeInput
  },
  setup() {
    const reset = () => {
      deviation.value = originalDeviation
      horizontalGap.value = originalPointCoint
    }

    return {
      deviation,
      horizontalGap,
      reset,
    }
  }
})
</script>
