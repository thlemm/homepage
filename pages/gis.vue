<template>
  <div>
    <page-title
      :title="$t('gis_title').toString()"
      :show="show.title"
    />

    <action-back-home
      to="/#experience"
    />

    <v-row
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col cols="10">
        <v-row
          no-gutters
          align="center"
          justify="start"
        >
          <v-col cols="12" align-self="start">
            <v-card-text class="mb-3 text-subtitle-1">
              {{ $t('lorem_ipsum_1') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              {{ $t('lorem_ipsum_2') }}
            </v-card-text>
            <ul>
              <li>HiWi-Job Stefan</li>
              <li>Wissenschaftlicher Mitarbeite gia</li>
              <li>OpenGeoResearch</li>
              <li>evtl. kleines eigenes Applet</li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import ActionBackHome from '~/components/main/actionBackHome'
import PageTitle from '~/components/main/pageTitle'

export default {
  name: 'PageGis',
  components: { PageTitle, ActionBackHome },

  data () {
    return {
      show: {
        title: false
      }
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
