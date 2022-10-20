<template>
  <div>
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <v-sheet color="secondary" height="200">
          <v-row
            no-gutters
            align="center"
            justify="center"
            class="text-center"
          >
            <v-col cols="12">
              <v-scale-transition>
                <div v-show="show.title" class="text-h1 background--text mt-12">Catalog app</div>
              </v-scale-transition>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row
        align="center"
        justify="center"
        class="mb-15"
    >
      <v-col cols="12">
        <v-row
            no-gutters
            align="center"
            justify="center"
        >
          <v-col cols="8">
            Hallo hier ist Inhalt zum Thema
          </v-col>
          <v-col cols="4">
            <v-card class="pa-0" color="background" elevation="0" width="375">
              <v-carousel
                height="700"
                hide-delimiter-background
                :delimiter-icon="mdiMinus"
              >
                <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                >
                  <v-img :src="item.src" height="700" contain></v-img>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiMinus } from '@mdi/js'

export default {
  name: 'pageCatalog',

  data () {
    return {
      mdiMinus,
      show: {
        title: false
      },
      items: [
        {
          src: '/catalog/catalog.thlemm.de_1.png'
        },
        {
          src: '/catalog/catalog.thlemm.de_2.png'
        },
        {
          src: '/catalog/catalog.thlemm.de_3.png'
        },
        {
          src: '/catalog/catalog.thlemm.de_4.png'
        }
      ]
    }
  },

  mounted() {
    setTimeout(() => (this.show.title = true), 100)
  }
}
</script>
