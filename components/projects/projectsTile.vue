<template>
  <v-card
    :width="width"
    :elevation="hover ? 3 : 0"
    :color="colorTile"
    class="pt-3 pb-2 ma-3"
    :to="to"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <v-card-title :class="colorText + '--text'"> {{ title }}</v-card-title>
    <v-card-text class="colorText + '--text'">{{ subtitle }}</v-card-text>
    <v-card-text class="text-center">
      <v-icon :color="colorText" :size="width - 50">{{ icon }}</v-icon>
    </v-card-text>
  </v-card>
</template>

<script>

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
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
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
    icon: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  },

  data () {
    return {
      hover: false
    }
  }
}
</script>
