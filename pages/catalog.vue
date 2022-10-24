<template>
  <div>
    <v-row
      no-gutters
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <v-sheet color="secondary" height="200" fill-height fluid>
          <v-row
            no-gutters
            align="center"
            justify="center"
            class="text-center fill-height"
          >
            <v-scale-transition>
              <v-col v-show="show.title" cols="12">
                <div class="text-h1 background--text">{{ $t('catalog_title') }}</div>
              </v-col>
            </v-scale-transition>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row
      no-gutters
      align="start"
      justify="center"
    >
      <v-col cols="10">
        <v-btn
          text
          to="/#projects"
        >
          <v-icon class="mr-1">{{ mdiArrowLeft }}</v-icon>
          {{ $t('action_back_home') }}
        </v-btn>

        <v-spacer/>
      </v-col>
    </v-row>
    <v-row
      v-if="!isMobile"
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col cols="10">
        <v-row
          no-gutters
          align="center"
          justify="start"
        >
          <v-col cols="7" align-self="start">
            <v-card-text class="mb-3 text-subtitle-1">{{ $t('catalog_text_1') }}</v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">{{ $t('catalog_text_2') }}</v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">{{ $t('catalog_text_3') }}</v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">{{ $t('catalog_text_4') }}</v-card-text>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="4">
            <v-card class="pa-0" color="background" elevation="0" width="370">
              <v-carousel
                height="700"
                cycle
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

    <v-row
      v-else
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col cols="10">
        <v-row
          no-gutters
          align="center"
          justify="start"
        >
          <v-card-text class="mb-3 text-subtitle-1">{{ $t('catalog_text_1') }}</v-card-text>
          <v-card-text class="mb-3 text-subtitle-1">{{ $t('catalog_text_2') }}</v-card-text>
          <v-card-text class="mb-3 text-subtitle-1">{{ $t('catalog_text_3') }}</v-card-text>
          <v-card-text class="mb-3 text-subtitle-1">{{ $t('catalog_text_4') }}</v-card-text>
        </v-row>
        <v-row
          no-gutters
          align="center"
          justify="start"
        >
          <v-spacer></v-spacer>
          <v-card class="pa-0" color="background" elevation="0" width="370">
            <v-carousel
              height="700"
              cycle
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
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiMinus, mdiArrowLeft } from '@mdi/js'

export default {
  name: 'pageCatalog',

  data () {
    return {
      mdiMinus,
      mdiArrowLeft,
      show: {
        title: false
      },
      isMobile: false,
      items: [
        {
          src: '/catalog/catalog.thlemm.de_list.png'
        },
        {
          src: '/catalog/catalog.thlemm.de_details.png'
        },
        {
          src: '/catalog/catalog.thlemm.de_menu.png'
        },
        {
          src: '/catalog/catalog.thlemm.de_select.png'
        },
        {
          src: '/catalog/catalog.thlemm.de_search.png'
        }
      ]
    }
  },

  beforeDestroy () {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  mounted () {
    setTimeout(() => (this.show.title = true), 100)
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 900
    },
  }
}
</script>
