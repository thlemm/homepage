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
        <v-card class="mt-5" v-observe-visibility="visibilityChanged" width="100%" color="background" elevation="0"></v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'sectionDetails',

  data () {
    return {

    }
  },

  methods: {
    visibilityChanged (isVisible) {
      console.log('visibilityChanged: ' + isVisible)
      if(isVisible) {
        this.$nuxt.$emit('details-visible')
      }
    }
  }
}
</script>
