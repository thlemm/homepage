<template>
  <div>
    <page-title
      :title="$t('stream_processing_title').toString()"
      :show="show.title"
    />

    <action-back-home
      to="/#experience"
      :cols="isMobile ? 10 : 8"
    />
    <ul>
      <li>Beispiel Mastarbeit</li>
      <li>Grafik aus MA?</li>
      <li>Kurze Erklärung was ist DSP</li>
    </ul>
  </div>
</template>

<script>

import PageTitle from '~/components/main/pageTitle'
import ActionBackHome from '~/components/main/actionBackHome'

export default {
  name: 'PageStreamProcessing',
  components: { ActionBackHome, PageTitle },

  data () {
    return {
      show: {
        title: false
      },
      isMobile: false
    }
  },

  mounted () {
    setTimeout(() => (this.show.title = true), 100)
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },

  beforeDestroy () {
    if (typeof window === 'undefined') { return }

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 900
    }
  }
}
</script>
