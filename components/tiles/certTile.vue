<template>
  <v-card
    :width="width"
    :elevation="hover ? 3 : 0"
    :color="colorTile"
    :class="isMobile ? 'pt-7 pb-4 ma-3 pr-5' : 'pt-3 pb-2 ma-3 pr-5'"
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
      <v-list-item-avatar
          tile
          :size="height"
          color="light"
      >
        <v-img :src="badge" />
      </v-list-item-avatar>
      <v-list-item-content class="mx-0">
        <v-card-title class="title ma-0 pa-0" style="word-break: break-word;">
          {{ title }}
        </v-card-title>
        <v-card-text class="ma-0 pa-0">
          Issued by <a :href="issuerLink" target="_blank">{{ issuerName }}</a>
        </v-card-text>
        <v-card-text class="ma-0 pa-0 mt-2">
          <v-chip
              v-for="(skill, i) in skills"
              :key="'d' + i"
              class="mr-2 mb-1"
              :color="'primary'"
              small
          >
            {{ skill }}
          </v-chip>
        </v-card-text>
      </v-list-item-content>
    </v-list-item>
    <v-container v-else>
      <v-avatar
          tile
          :size="height"
          color="light"
      >
        <v-img :src="badge" />
      </v-avatar>
      <v-card-title class="title ma-0 pa-0" style="word-break: break-word;">
        {{ title }}
      </v-card-title>
      <v-card-text class="ma-0 pa-0">
        Issued by <a :href="issuerLink" target="_blank">{{ issuerName }}</a>
      </v-card-text>
      <v-card-text class="ma-0 pa-0 mt-2">
        <v-chip
            v-for="(skill, i) in skills"
            :key="'d' + i"
            class="mr-2 mb-1"
            :color="'primary'"
            small
        >
          {{ skill }}
        </v-chip>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'

export default {
  name: 'CertTile',

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
    title: {
      type: String,
      required: true
    },
    issuerName: {
      type: String,
      required: true
    },
    issuerLink: {
      type: String,
      required: true
    },
    badge: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true,
      default: () => { return [] }
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
