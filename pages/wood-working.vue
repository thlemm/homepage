<template>
  <div>
    <page-title
      :title="$t('wood_working_title').toString()"
      :show="show.title"
    />

    <action-back-home
      to="/#projects"
      :cols="isMobile ? 10 : 8"
    />

    <v-row
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col :cols="isMobile ? 10 : 8">
        <v-row
          no-gutters
          align="center"
          justify="start"
        >
          <v-col cols="12" align-self="start">
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('wood_working_text') }}
            </v-card-text>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center"
          justify="center"
        >
          <v-col cols="10" align-self="center">
            <v-card-title class="ml-0 pl-0 mb-0 pb-0">{{ $t('wood_working_subtitle_christmas') }}</v-card-title>
            <v-carousel
              class="ma-0 pa-0"
              height="auto"
              :delimiter-icon="mdiMinus"
            >
              <v-carousel-item
                v-for="(item,i) in items"
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
                        :min-height="isMobile ? 250 : 600"
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiMinus } from '@mdi/js'
import PageTitle from '~/components/main/pageTitle'
import ActionBackHome from '~/components/main/actionBackHome'

export default {
  name: 'PageWoodWorking',
  components: { ActionBackHome, PageTitle },
  data () {
    return {
      mdiMinus,
      show: {
        title: false
      },
      isMobile: false,
      items: [
        {
          src: '/woodworking/christmas/schneemann_1.jpg',
          description: this.$t('wood_working_schneemann_1')
        },
        {
          src: '/woodworking/christmas/schneemann_2.jpg',
          description: this.$t('wood_working_schneemann_2')
        },
        {
          src: '/woodworking/christmas/tannen_1.jpg',
          description: this.$t('wood_working_tannen_1')
        },
        {
          src: '/woodworking/christmas/tannen_2.jpg',
          description: this.$t('wood_working_tannen_2')
        },
        {
          src: '/woodworking/christmas/tannen_altholz_4.jpg',
          description: this.$t('wood_working_tannen_altholz_4')
        },
        {
          src: '/woodworking/christmas/tanne_licht_1.jpg',
          description: this.$t('wood_working_tanne_licht_1')
        },
        {
          src: '/woodworking/christmas/tanne_licht_2.jpg',
          description: this.$t('wood_working_tanne_licht_2')
        }
      ]
    }
  },

  mounted () {
    setTimeout(() => (this.show.title = true), 100)
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },

  beforeDestroy () {
    if (typeof window === 'undefined') { return }

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 900
    }
  }
}
</script>
