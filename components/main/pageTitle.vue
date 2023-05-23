<template>
  <v-row
    no-gutters
    align="center"
    justify="center"
  >
    <v-col cols="12">
      <v-sheet color="secondary" height="120" fill-height fluid>
        <v-row
          no-gutters
          align="center"
          justify="center"
          class="text-center fill-height"
        >
          <v-scale-transition>
            <v-col v-show="show" cols="12">
              <div class="text-h2 background--text">
                {{ title }}
              </div>
            </v-col>
          </v-scale-transition>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'PageTitle',

  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  data () {
    return {}
  }
}
</script>
