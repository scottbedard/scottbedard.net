<template>
  <div class="scene">
    <div
      class="core"
      :style="{
        transform: `rotate3d(${position[0]}, ${position[1]}, ${position[2]}, 100deg)`
      }">
      <div
        v-for="face in faces"
        class="face"
        :data-face="face"
        :key="face">
        <div
          v-for="(sticker, index) in cube.state[face]"
          v-text="'↑'"
          class="flex items-center justify-center text-xl text-dark-50"
          data-sticker
          :style="{
            visibility: turningStickers.includes(sticker) ? 'hidden' : 'visible',
          }"
          :data-value="sticker.value"
          :key="index" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted, PropType, watch } from 'vue'
import { Cube, CubeFace } from '@bedard/twister'

const faces: CubeFace[] = ['u', 'l', 'f', 'r', 'b', 'd']

const transitionDuration = 250;

type Vector3 = [number, number, number]

export default defineComponent({
  emits: [
    'scramble'
  ],
  props: {
    scramble: {
      default: 0
    },
    position: {
      default: () => [0, 0, 0] as Vector3,
      type: Array as any as PropType<Vector3>
    }
  },
  setup(props, { emit }) {
    const cube = ref(new Cube({ size: 3 }))

    const currentTurn = computed(() => queue.value[0] || null)

    const currentScramble = ref('')

    const turningStickers = computed(() => {
      return currentTurn.value
        ? cube.value.getStickersForTurn(currentTurn.value)
        : []
    })

    const turning = computed(() => turningStickers.value.length > 0)

    const queue = ref([] as string[]);

    watch(() => props.scramble, () => {
      currentScramble.value = cube.value.generateScramble(20)
    })

    watch(currentScramble, (scramble) => {
      cube.value.turn(scramble)
      emit('scramble', scramble)
    })

    onMounted(() => {
      cube.value.reset()
    })

    return {
      cube,
      currentTurn,
      faces,
      queue,
      transitionDuration,
      turning,
      turningStickers,
    }
  }
})
</script>

<style lang="scss" scoped>
$elevation: 50% + 2.5%;
$radius: 15%;
$spacing: 5%;
$turnDuration: 1s;

// translating along the Z axis can have unexpected results if previous
// transitions aren't consistent. this function avoids the issue by
// providing a consistent starting point.
@function translateZSafe($x) {
  @return rotateY(-90deg) translateX($x) rotateY(90deg);
}

// scene
.scene {
  padding: 25%;
  perspective: 1000px;
  position: relative;
  width: 100%;
}

// core
.core {
  margin: 0 auto;
  padding-bottom: 50%;
  position: absolute;
  transform-style: preserve-3d;
  width: 50%;
}

// current turn
.current-turn {
  transition: transform 1s linear;
}

// face
.face {
  display: grid;
  grid-gap: $spacing;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  position: absolute;
  transition-property: transform;
  transition-timing-function: linear;
  width: 100%;

  &[data-face="u"] {
    transform: rotateX(90deg) rotateZ(0deg) translateZSafe($elevation);
  }

  &[data-face="l"] {
    transform: rotateY(-180deg) translateX($elevation) rotateY(90deg);
  }

  &[data-face="f"] {
    transform: translateZSafe($elevation);
  }

  &[data-face="r"] {
    transform: rotateY(90deg) translateZSafe($elevation);
  }

  &[data-face="b"] {
    transform: rotateY(-180deg) translateZSafe($elevation);
  }

  &[data-face="d"] {
    transform: rotateX(-90deg) translateZSafe($elevation);
  }
}

// stickers
[data-sticker] {
  aspect-ratio: 1 / 1;
  @apply border border-dark-10 rounded-lg;
  &[data-value="0"] { @apply bg-yellow-300; }
  &[data-value="1"] { @apply bg-yellow-600; }
  &[data-value="2"] { @apply bg-blue-500; }
  &[data-value="3"] { @apply bg-red-500; }
  &[data-value="4"] { @apply bg-green-500; }
  &[data-value="5"] { @apply bg-gray-200; }
}

.turn-u {
  &[data-face="u"] { transform: rotateX(90deg) rotateZ(90deg) translateZSafe($elevation) }
  &[data-face="l"] { transform: rotateY(-180deg) translateZSafe($elevation) }
  &[data-face="f"] { transform: rotateY(-180deg) translateX($elevation) rotateY(90deg) }
  &[data-face="r"] { transform: rotateY(0deg) translateZSafe($elevation) }
  &[data-face="b"] { transform: rotateY(-270deg) translateZSafe($elevation) }
  &[data-face="d"] { transform: rotateX(-90deg) translateZSafe($elevation) }
}

// .turn-u- {
//   // &[data-face="u"] { transform: rotateX(90deg) rotateZ(-90deg) translateZSafe($elevation) }
//   // &[data-face="l"] { transform: rotateY(0deg) translateZSafe($elevation) }
//   // &[data-face="f"] { transform: rotateY(-180deg) translateX($elevation) rotateY(90deg) }
//   // &[data-face="r"] { transform: rotateY(0deg) translateZSafe($elevation) }
//   // &[data-face="b"] { transform: rotateY(-270deg) translateZSafe($elevation) }
//   // &[data-face="d"] { transform: rotateX(-90deg) translateZSafe($elevation) }
// }

// .turn-l {
//   &[data-face="u"] { transform: rotateX(90deg) rotateZ(-90deg) translateZSafe($elevation) }
//   &[data-face="l"] { transform: rotateY(-90deg) translateZSafe($elevation) }
//   &[data-face="f"] { transform: translateZSafe($elevation) }
//   &[data-face="r"] { transform: rotateY(90deg) translateZSafe($elevation) }
//   &[data-face="b"] { transform: rotateY(-180deg) translateZSafe($elevation) }
//   &[data-face="d"] { transform: rotateX(-90deg) translateZSafe($elevation) }
// }
</style>
