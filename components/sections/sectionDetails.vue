<template>
  <v-row
    align="center"
    justify="center"
    class="mb-15"
  >
    <v-col cols="9">
      <v-row
        no-gutters
        align="end"
        justify="center"
      >
        <v-card v-observe-visibility="visibilityChanged" class="mt-5" width="100%" color="background" elevation="0" />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'SectionDetails',

  data () {
    return {

    }
  },

  methods: {
    visibilityChanged (isVisible) {
      if (isVisible) {
        this.$nuxt.$emit('details-visible')
      }
    }
  }
}
</script>
