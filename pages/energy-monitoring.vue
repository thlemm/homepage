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
            <v-card class="ml-5 mr-5 text-center" elevation="0" color="light">
              <v-img contain src="/monitoring/amsel_structure.PNG"></v-img>
              <span class="text-subtitle-2">Aufbau des Datenloggerns (AMSEL) und Bilder des Messnetzes</span>
            </v-card>
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('energy_monitoring_text_3') }}
            </v-card-text>
            <v-card class="ml-5 mr-5 text-center" elevation="0" color="light">
              <v-img contain src="/monitoring/amsel_time.png"></v-img>
              <span class="text-subtitle-2">Vergleich der Transmissionsdauer für unterschiedliche Konfigurationen. Durch die automatisierte Konfiguration der Zähler konnten die Transmissionsdauern deutlich verringert werden.</span>
            </v-card>
            <v-card class="ml-5 mr-5 mt-8 text-center" elevation="0" color="light">
              <video
                id="video-player"
                width="100%"
                poster="/monitoring/thumbnail.png"
                playsinline
                muted
                controls
              >
                <source src="/monitoring/data_logger.mp4" type="video/mp4" />
                Your browser does not support the video tag or the file format of this video.
              </video>
              <span class="text-subtitle-2">Dieses Video zeigt den Aufbau der Bedienoberfläche des Datenloggers.</span>
            </v-card>
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
