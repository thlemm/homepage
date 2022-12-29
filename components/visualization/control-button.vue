<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :class="cssHelper"
        elevation="2"
        small
        tile
        :color="buttonColor"
        :disabled="disabled"
        v-bind="attrs"
        v-on="on"
        @click="$emit('click')"
      >
        <v-icon :color="iconColor">
          {{ icon }}
        </v-icon>
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'controlButton',

  props: {
    icon: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      required: true
    },
    buttonColor: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    cssHelper: {
      type: String,
      required: false,
      default: ''
    }
  },

  data() {
    return {}
  }
}
</script>
