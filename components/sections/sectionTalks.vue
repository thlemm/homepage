<template>
  <div>
    <v-row
      class="text-center"
      align="center"
      justify="center"
    >
      <span class="text-h4 primary--text pa-2">
        {{ $t('section_title_talks') }}
      </span>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col :cols="isMobile ? 12 : 7">
        <v-row
          no-gutters
          align="center"
          justify="center"
        >
          <talk-tile
            v-for="(talk, i) in talks"
            :key="i"
            :height="50"
            :width="'88%'"
            :conference="talk.conference"
            :host="talk.host"
            :color-tile="'light'"
            :color-text="'black'"
            :topic="talk.topic"
            :date="talk.date"
            :to="talk.link"
            :extern="talk.extern"
            :is-mobile="isMobile"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TalkTile from '~/components/tiles/talkTile'
import talks from '~/static/talks/talks.json'

export default {
  name: 'SectionTalks',
  components: { TalkTile },
  data () {
    return {
      isMobile: false,
      talks
    }
  },

  mounted () {
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
