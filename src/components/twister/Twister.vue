<template>
  <div class="scene">
    <div class="core">
      <div
        v-for="face in faces"
        class="face"
        :data-face="face"
        :key="face">
        <div
          v-for="(sticker, index) in cube.state[face]"
          class="sticker"
          :data-value="sticker.value"
          :key="index" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import { Cube, CubeFace } from '@bedard/twister'

const faces: CubeFace[] = ['u', 'l', 'f', 'r', 'b', 'd']

export default defineComponent({
  props: {
    scramble: {
      default: 0
    }
  },
  setup(props, { emit }) {
    const cube = ref(new Cube({ size: 3 }))
    const turning = ref(false)

    onMounted(() => {
      cube.value.reset()
    })

    watch(props, () => {
      if (!turning.value) cube.value.scramble(15)
    })

    return {
      cube,
      faces,
      turning,
    }
  }
})
</script>

<style lang="scss" scoped>
$elevation: 50% + 3%;
$radius: 15%;
$spacing: 5%;

.scene {
  padding: 25%;
  perspective: 1000px;
  width: 100%;
}

.core {
  font-size: 3rem;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: rotateX(-40deg) rotateY(-32deg);
  padding-bottom: 100%;
  width: 100%;
}

.face {
  display: grid;
  grid-gap: $spacing;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  position: absolute;
  width: 100%;

  &[data-face="u"] {
    transform: rotateX(90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg);
  }

  &[data-face="l"] {
    transform: rotateY(-90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg);
  }

  &[data-face="f"] {
    transform: rotateY(-90deg) translateX($elevation) rotateY(90deg);
  }

  &[data-face="r"] {
    transform: rotateY( 90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg);
  }

  &[data-face="b"] {
    transform: rotateY(-180deg) rotateY(-90deg) translateX($elevation) rotateY(90deg);
  }

  &[data-face="d"] {
    transform: rotateX(-90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg);
  }
}

.sticker {
  aspect-ratio: 1 / 1;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: $radius;

  &[data-value="0"] { @apply bg-yellow-300 }
  &[data-value="1"] { @apply bg-yellow-600 }
  &[data-value="2"] { @apply bg-blue-500 }
  &[data-value="3"] { @apply bg-red-500 }
  &[data-value="4"] { @apply bg-green-500 }
  &[data-value="5"] { @apply bg-gray-100 }
}
</style>
