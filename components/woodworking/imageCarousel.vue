<template>
  <v-row
    class="mb-5"
    no-gutters
    align="center"
    justify="center"
  >
    <v-col cols="10" align-self="center">
      <v-card-title class="ml-0 pl-0 mb-0 pb-0">
        {{ title }}
      </v-card-title>
      <v-carousel
        class="ma-0 pa-0"
        height="auto"
        :delimiter-icon="mdiMinus"
      >
        <v-carousel-item
          v-for="(item,i) in images"
          :key="i"
        >
          <v-sheet
            color="tertiary"
            height="100%"
            tile
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-card class="pb-12" color="secondary">
                <v-img
                  :src="item.src"
                  :min-height="minHeight"
                  height="100%"
                  contain
                ></v-img>
                <v-card-text class="tertiary--text pl-5 pr-5 pb-5">
                  {{ item.description }}
                </v-card-text>
              </v-card>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
import { mdiMinus } from '@mdi/js'

export default {
  name: 'ImageCarousel',

  props: {
    minHeight: {
      type: Number,
      required: true
    },
    images: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      mdiMinus
    }
  }
}
</script>
