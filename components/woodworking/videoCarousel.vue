<template>
  <v-row
    class="mb-5"
    no-gutters
    align="center"
    justify="center"
  >
    <v-col cols="10" align-self="center">
      <v-card-title class="ml-0 pl-0 mb-0 pb-0">
        {{ title }}
      </v-card-title>
      <v-carousel
        class="ma-0 pa-0"
        height="auto"
        :delimiter-icon="mdiMinus"
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item>
          <v-sheet
            color="tertiary"
            height="100%"
            tile
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-card class="pb-4" color="secondary">
                <video
                  id="video-player-0"
                  width="100%"
                  poster="/woodworking/grill/grill_1.png"
                  muted
                  controls
                  playsinline
                  loop
                >
                  <!--                  <source src="/woodworking/grill/grill_2.mp4" type="video/mp4" />-->
                  <source src="/woodworking/grill/grill_2.webm" type="video/webm" />
                  Your browser does not support the video tag or the file format of this video.
                </video>
                <v-card-text class="tertiary--text pl-5 pr-5 pb-0">
                  {{ $t('wood_working_description_grill_1') }}
                  Online-Tool: <a style="color: #F2F3D9" href="https://woodgears.ca/gear_cutting/template.html" target="_blank">https://woodgears.ca</a>
                </v-card-text>
              </v-card>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
import { mdiMinus } from '@mdi/js'

export default {
  name: 'VideoCarousel',

  props: {
    minHeight: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      mdiMinus,
      videoPlayer0: undefined
    }
  },

  mounted () {
    this.videoPlayer0 = document.getElementById('video-player-0')

    setTimeout(() => (this.play(0)), 1000)
  },

  methods: {
    play () {
      if (this.videoPlayer0) {
        this.videoPlayer0.play()
      }
    }
  }
}
</script>
