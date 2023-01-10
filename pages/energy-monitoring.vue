<template>
  <div>
    <page-title
      :title="$t('energy_monitoring_title').toString()"
      :show="show.title"
    />

    <action-back-home
      to="/#experience"
      :cols="isMobile ? 10 : 8"
    />

    <v-row
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col :cols="isMobile ? 10 : 8">
        <v-row
          no-gutters
          align="center"
          justify="start"
        >
          <v-col cols="12" align-self="start">
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('energy_monitoring_text_1') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('energy_monitoring_text_2') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('energy_monitoring_text_3') }}
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import PageTitle from '~/components/main/pageTitle'
import ActionBackHome from '~/components/main/actionBackHome'

export default {
  name: 'PageEnergyMonitoring',
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
