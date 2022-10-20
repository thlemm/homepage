<template>
  <v-card color="background" elevation="0" height="100vh">
    <v-card color="background" elevation="0" height="25vh" />
    <v-row no-gutters>
      <v-spacer></v-spacer>
      <v-card class="ma-0 pa-0" width="600" color="background" elevation="0">
       <v-card-title class="ma-0 pa-0 text-h4 font-weight-light"><v-spacer />Thomas Lemmerz</v-card-title>
      </v-card>
      <v-spacer></v-spacer>
    </v-row>
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-spacer></v-spacer>
      <v-img max-width="600" src="placeholder.jpg"></v-img>
      <v-spacer></v-spacer>
    </v-row>
    <v-scroll-y-transition>
      <v-row v-show="isVisible" no-gutters>
        <v-spacer></v-spacer>
        <v-card class="ma-0 pa-0 mt-2" width="600" color="background" elevation="0">
          <v-card-title class="ma-0 pa-0 text-h5 font-weight-light"><v-spacer />Engineer</v-card-title>
          <v-card-title class="ma-0 pa-0 text-body-1 font-weight-light"><v-spacer />Aachen, Germany</v-card-title>
          <v-card-title class="ma-0 pa-0 text-body-1 font-weight-light"><v-spacer /><a href="mailto:kontakt@thlemm.de">kontakt@thlemm.de</a></v-card-title>
        </v-card>
        <v-spacer></v-spacer>
      </v-row>
    </v-scroll-y-transition>
  </v-card>
</template>

<script>

export default {
  name: 'sectionImage',

  data () {
    return {
      isVisible: false
    }
  },

  created() {
    this.$nuxt.$on('details-visible', () => {
      this.isVisible = true
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('details-visible')
  }
}
</script>
