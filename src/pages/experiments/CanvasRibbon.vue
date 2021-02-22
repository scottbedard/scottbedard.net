<template>
  <Layout>
    <div class="max-w-xl">
      <div class="gap-6 grid">
        <p>
          My site background is the result of being bored, and wanting to play with the canvas element. There isn't much going on here from a technical sense. Just generating points across the screen with slightly varying height, and playing connect the dots. Below I've exposed some of the constants involved in building it, take it for a spin!
        </p>
        <div>
          <div class="max-w-sm">
            <label>
              <div>
                Deviation: {{ deviation }}px
              </div>
              <RangeInput
                v-model="deviation"
                :max="500"
                :min="0" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { deviation } from '@/components/Ribbon.vue'
import Layout from '@/components/Layout.vue';
import RangeInput from '@/components/RangeInput.vue'

export default defineComponent({
  components: {
    Layout,
    RangeInput
  },
  setup() {
    return { deviation }
  }
})
</script>
