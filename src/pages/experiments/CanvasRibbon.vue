<template>
  <Layout>
    <div class="max-w-2xl">
      <div class="gap-6 grid">
        <h1 class="font-bold text-2xl">About my site background...</h1>
        <p>
          I call it my canvas ribbon, and it's what happened one night while playing
          around with a function to calculate gradients. To render the canvas I'm
          generating points along a random horizontal path, and playing connect
          the dots. Then it's just a matter of filling the resulting triangles.
        </p>
        <p>
          Here are a couple of the constants involved if you want to mess around!
        </p>
        <div class="gap-3 grid sm:grid-cols-2 sm:gap-6">
          <label>
            <div>Vertical deviation: <b>{{ (deviation / 500).toFixed(2) }}</b></div>
            <div class="mb-2 text-xs">This controls the randomness between Y coordinate of adjacent points.</div>
            <RangeInput
              v-model="deviation"
              :max="500"
              :min="0" />
          </label>
          <label>
            <div>Horizontal gap: <b>{{ horizontalGap }}</b></div>
            <div class="mb-2 text-xs">This controls the gap along the X axis. A lower value results in more triangles being rendered.</div>
            <RangeInput
              v-model="horizontalGap"
              :max="100"
              :min="1" />
          </label>
        </div>
        <a
          href="#"
          @click.prevent="reset">
          Click to reset
        </a>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { deviation, horizontalGap } from '@/components/Ribbon.vue'
import Layout from '@/components/Layout.vue'
import RangeInput from '@/components/RangeInput.vue'

const originalDeviation = deviation.value
const originalPointCoint = horizontalGap.value

export default defineComponent({
  components: {
    Layout,
    RangeInput,
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
