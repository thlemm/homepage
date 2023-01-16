<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :class="cssHelper"
        :color="color"
        elevation="8"
        fab
        x-large
        icon
        outlined
        :href="link"
        target="_blank"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'ContactButton',

  props: {
    icon: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    cssHelper: {
      type: String,
      required: false,
      default: ''
    },
    link: {
      type: String,
      required: false,
      default: ''
    }
  },

  data () {
    return {}
  }
}
</script>
