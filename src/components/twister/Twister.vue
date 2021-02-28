<template>
  <!-- idle -->
  <div class="scene" @transitionend="startNextTurn">
    <div class="core">
      <!-- idle -->
      <div
        v-for="face in faces"
        class="face"
        :data-face="face"
        :key="face">
        <div
          v-for="(sticker, index) in cube.state[face]"
          v-text="index"
          class="sticker"
          :style="{
            visibility: turningStickers.includes(sticker) ? 'hidden' : 'visible',
          }"
          :data-value="sticker.value"
          :key="index" />
      </div>

      <!-- turning -->
      <div
        v-for="face in faces"
        class="face"
        :class="currentTurn && `turn-${currentTurn.toLowerCase()}`"
        :data-face="face"
        :key="face">
        <div
          v-for="(sticker, index) in cube.state[face]"
          v-text="index"
          class="sticker"
          :style="{
            visibility: turningStickers.includes(sticker) ? 'visible' : 'hidden',
          }"
          :data-value="sticker.value"
          :key="index" />
      </div>
    </div>
  </div>

  <pre class="mt-32">{{ { currentTurn, queue } }}</pre>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref, onMounted, watch } from 'vue'
import { Cube, CubeFace } from '@bedard/twister'
import { debounce } from 'lodash-es';

const faces: CubeFace[] = ['u', 'l', 'f', 'r', 'b', 'd']

export default defineComponent({
  props: {
    scramble: {
      default: 0
    }
  },
  setup(props, { emit }) {
    const animation = ref(false)

    const cube = ref(new Cube({ size: 3 }))

    const currentTurn = computed(() => queue.value[0] || null)

    const turningStickers = computed(() => {
      return currentTurn.value
        ? cube.value.getStickersForTurn(currentTurn.value)
        : []
    })

    const turning = computed(() => turningStickers.value.length > 0)

    const queue = ref([] as string[]);

    const scramble = () => {
      queue.value = ['U']
      // queue.value = cube.value.generateScramble(5).split(' ')
    }

    const startNextTurn = debounce(() => queue.value.shift(), 10)

    onMounted(() => {
      cube.value.reset()
    })

    watch(props, () => {
      if (!turning.value) scramble()
    })

    return {
      cube,
      currentTurn,
      faces,
      queue,
      startNextTurn,
      turning,
      turningStickers,
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
  position: relative;
  width: 100%;
}

.core {
  margin: 0 auto;
  padding-bottom: 50%;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(-20deg) rotateY(-30deg);
  width: 50%;
}

.face {
  display: grid;
  grid-gap: $spacing;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  position: absolute;
  transition: transform 1s ease-in-out;
  width: 100%;

  &[data-face="u"] {
    transform: rotateX(90deg) rotateZ(0deg) rotateY(-90deg) translateX($elevation) rotateY(90deg);
  }

  &[data-face="l"] {
    transform: rotateY(-90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg);
  }

  &[data-face="f"] {
    transform: rotateY(-90deg) translateX($elevation) rotateY(90deg);
  }

  &[data-face="r"] {
    transform: rotateY(90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg);
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
  // border: 1px solid rgba(0, 0, 0, 0.5);
  // border-radius: $radius;

  &[data-value="0"] { @apply bg-yellow-300 }
  &[data-value="1"] { @apply bg-yellow-600 }
  &[data-value="2"] { @apply bg-blue-500 }
  &[data-value="3"] { @apply bg-red-500 }
  &[data-value="4"] { @apply bg-green-500 }
  &[data-value="5"] { @apply bg-gray-100 }
}

.turn-u {
  &[data-face="u"] { transform: rotateX(90deg) rotateZ(90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
  &[data-face="l"] { transform: rotateY(-180deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
  &[data-face="f"] { transform: rotateY(-180deg) translateX($elevation) rotateY(90deg) }
  &[data-face="r"] { transform: rotateY(0deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
  &[data-face="b"] { transform: rotateY(-270deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
  &[data-face="d"] { transform: rotateX(-90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
}

// .turn-l {
//   &[data-face="u"] { transform: rotateX(90deg) rotateZ(-90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
//   &[data-face="l"] { transform: rotateY(-90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
//   &[data-face="f"] { transform: rotateY(-90deg) translateX($elevation) rotateY(90deg) }
//   &[data-face="r"] { transform: rotateY(90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
//   &[data-face="b"] { transform: rotateY(-180deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
//   &[data-face="d"] { transform: rotateX(-90deg) rotateY(-90deg) translateX($elevation) rotateY(90deg) }
// }
</style>
