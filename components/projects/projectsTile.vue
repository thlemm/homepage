<template>
  <v-card
    :width="width"
    elevation="0"
    color="#C6D2CB"
    class="pt-3 pb-2 ma-3"
  >
    <v-card-title class="secondary--text">Hallo das ist Inhalt</v-card-title>
    <v-card-text class="secondary--text">Hallo das ist Inhalt</v-card-text>
    <v-card-text class="text-center">
      <v-icon color="secondary" :size="width - 50">{{ mdiAnchor}}</v-icon>
    </v-card-text>

  </v-card>
</template>

<script>
import { mdiAnchor } from '@mdi/js'
export default {
  name: 'projectTile',

  props: {
    width: {
      type: Number,
      required: false,
      default: 300
    },
    height: {
      type: Number,
      required: false,
      default: 300
    }
  },

  data () {
    return {
      mdiAnchor
    }
  }
}
</script>
