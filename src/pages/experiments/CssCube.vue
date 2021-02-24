<template>
  <Layout>
    <div class="gap-6 grid md:grid-cols-2">
      <div class="gap-3 grid">
        <PageTitle>A speed cube made of divs</PageTitle>
        <p>
          Have you ever built something just to see if you could? I'm
          afraid that's what we have here. I was experimenting with 3D
          transforms, and wondered if it could be used for speedcubing.
        </p>
        <p>
          I keep this page around mainly to watch browser support change
          over time. You're welcome to give it a scramble and see what
          happens, but I no longer support solving on this version. For that,
          head over to <a href="https://speedcube.site">speedcube.site</a>!
        </p>
        <div>
          <Button @click.prevent="scramble">Scramble</Button>
        </div>
      </div>
      <div>
        <CssTwister />
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import CssTwister from '@/components/CssTwister.vue'
import Layout from '@/components/Layout.vue'
import PageTitle from '@/components/PageTitle.vue'

export default defineComponent({
  components: {
    Button,
    CssTwister,
    Layout,
    PageTitle,
  },
  setup() {
    const scramble = () => {
      console.log('scrambling')
    }

    return {
      scramble
    }
  }
})
</script>
