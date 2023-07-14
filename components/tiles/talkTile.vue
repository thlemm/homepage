<template>
  <v-card
    :width="width"
    :elevation="hover ? 3 : 0"
    :color="colorTile"
    :class="isMobile ? 'pt-7 pb-4 ma-3' : 'pt-3 pb-2 ma-3'"
    :href="to"
    :target="extern ? '_blank' : '_self'"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <v-btn
      v-if="extern"
      icon
      absolute
      top
      right
    >
      <v-icon>{{ mdiOpenInNew }}</v-icon>
    </v-btn>
    <v-list-item v-if="!isMobile">
      <v-list-item-content class="mx-0">
        <v-card-title class="title ma-0 pa-0" style="word-break: break-word;">
          {{ conference }}
        </v-card-title>
        <v-card-subtitle class="subtitle-2 ma-0 pa-0" style="word-break: break-word;">
          {{ date }}, {{ host }}
        </v-card-subtitle>
        <v-card-text class="subtitle-1 ma-0 pa-0">
          {{ topic }}
        </v-card-text>
      </v-list-item-content>
    </v-list-item>
    <v-container v-else>
      <v-card-title class="title ma-0 pa-0" style="word-break: break-word;">
        {{ conference }}
      </v-card-title>
      <v-card-text class="ma-0 pa-0">
        {{ topic }}
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'

export default {
  name: 'TalkTile',

  props: {
    width: {
      type: String,
      required: false,
      default: '88%'
    },
    height: {
      type: Number,
      required: false,
      default: 300
    },
    conference: {
      type: String,
      required: true
    },
    topic: {
      type: String,
      required: true
    },
    host: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    colorTile: {
      type: String,
      required: true
    },
    colorText: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false,
      default: '/'
    },
    extern: {
      type: Boolean,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {
      mdiOpenInNew,
      hover: false
    }
  }
}
</script>
