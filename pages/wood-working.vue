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
        <video-carousel
          :title="$t('wood_working_subtitle_grill').toString()"
          :min-height="isMobile ? 250 : 600"
        ></video-carousel>
        <image-carousel
          :min-height="isMobile ? 250 : 600"
          :title="$t('wood_working_subtitle_christmas').toString()"
          :images="christmas"
        />
        <image-carousel
          :min-height="isMobile ? 250 : 600"
          :title="$t('wood_working_subtitle_klavier').toString()"
          :images="klavier"
        />
        <image-carousel
          :min-height="isMobile ? 250 : 600"
          :title="$t('wood_working_subtitle_vogelhaus').toString()"
          :images="vogelhaus"
        />
        <image-carousel
          :min-height="isMobile ? 250 : 600"
          :title="$t('wood_working_subtitle_kueche').toString()"
          :images="kueche"
        />
        <image-carousel
          :min-height="isMobile ? 250 : 600"
          :title="$t('wood_working_subtitle_schleif').toString()"
          :images="schleif"
        />
        <image-carousel
          :min-height="isMobile ? 250 : 600"
          :title="$t('wood_working_subtitle_pumpe').toString()"
          :images="pumpe"
        />
        <image-carousel
          :min-height="isMobile ? 250 : 600"
          :title="$t('wood_working_subtitle_weitere').toString()"
          :images="weitere"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageTitle from '~/components/main/pageTitle'
import ActionBackHome from '~/components/main/actionBackHome'
import ImageCarousel from '~/components/woodworking/imageCarousel'
import VideoCarousel from '~/components/woodworking/videoCarousel'

export default {
  name: 'PageWoodWorking',
  components: { VideoCarousel, ImageCarousel, ActionBackHome, PageTitle },
  data () {
    return {
      show: {
        title: false
      },
      isMobile: false,
      christmas: [
        {
          src: '/woodworking/christmas/schneemann_1.jpg',
          description: this.$t('wood_working_description_christmas_schneemann_1')
        },
        {
          src: '/woodworking/christmas/schneemann_2.jpg',
          description: this.$t('wood_working_description_christmas_schneemann_2')
        },
        {
          src: '/woodworking/christmas/tannen_1.jpg',
          description: this.$t('wood_working_description_christmas_tannen_1')
        },
        {
          src: '/woodworking/christmas/tannen_2.jpg',
          description: this.$t('wood_working_description_christmas_tannen_2')
        },
        {
          src: '/woodworking/christmas/tannen_altholz_4.jpg',
          description: this.$t('wood_working_description_christmas_tannen_altholz_4')
        },
        {
          src: '/woodworking/christmas/tanne_licht_1.jpg',
          description: this.$t('wood_working_description_christmas_tanne_licht_1')
        },
        {
          src: '/woodworking/christmas/tanne_licht_2.jpg',
          description: this.$t('wood_working_description_christmas_tanne_licht_2')
        },
        {
          src: '/woodworking/christmas/kerzen_1.jpg',
          description: this.$t('lorem_ipsum_1')
        },
        {
          src: '/woodworking/christmas/wichtel_1.jpg',
          description: this.$t('lorem_ipsum_1')
        }
      ],
      klavier: [
        {
          src: '/woodworking/klavier/klavier_1.jpg',
          description: this.$t('wood_working_description_klavier_1')
        },
        {
          src: '/woodworking/klavier/klavier_2.jpg',
          description: this.$t('wood_working_description_klavier_2')
        },
        {
          src: '/woodworking/klavier/klavier_3.jpg',
          description: this.$t('wood_working_description_klavier_3')
        },
        {
          src: '/woodworking/klavier/klavier_4.jpg',
          description: this.$t('wood_working_description_klavier_4')
        },
        {
          src: '/woodworking/klavier/klavier_5.jpg',
          description: this.$t('wood_working_description_klavier_5')
        },
        {
          src: '/woodworking/klavier/klavier_6.jpg',
          description: this.$t('wood_working_description_klavier_6')
        }
      ],
      vogelhaus: [
        {
          src: '/woodworking/vogelhaus/vogelhaus_1.jpg',
          description: this.$t('wood_working_description_vogelhaus_1')
        },
        {
          src: '/woodworking/vogelhaus/vogelhaus_2.jpg',
          description: this.$t('wood_working_description_vogelhaus_2')
        },
        {
          src: '/woodworking/vogelhaus/vogelhaus_3.jpg',
          description: this.$t('wood_working_description_vogelhaus_3')
        },
        {
          src: '/woodworking/vogelhaus/vogelhaus_4.jpg',
          description: this.$t('wood_working_description_vogelhaus_4')
        },
        {
          src: '/woodworking/vogelhaus/vogelhaus_5.jpg',
          description: this.$t('wood_working_description_vogelhaus_5')
        },
        {
          src: '/woodworking/vogelhaus/vogelhaus_6.jpg',
          description: this.$t('wood_working_description_vogelhaus_6')
        }
      ],
      kueche: [
        {
          src: '/woodworking/kueche/kueche_1.jpg',
          description: this.$t('wood_working_description_kueche_1')
        },
        {
          src: '/woodworking/kueche/kueche_2.jpg',
          description: this.$t('wood_working_description_kueche_2')
        },
        {
          src: '/woodworking/kueche/kueche_3.jpg',
          description: this.$t('wood_working_description_kueche_3')
        },
        {
          src: '/woodworking/kueche/kueche_1.jpg',
          description: this.$t('wood_working_description_kueche_4')
        }
      ],
      schleif: [
        {
          src: '/woodworking/schleif/schleif_1.jpg',
          description: this.$t('wood_working_description_schleif_1')
        },
        {
          src: '/woodworking/schleif/schleif_2.jpg',
          description: this.$t('wood_working_description_schleif_2')
        }
      ],
      pumpe: [
        {
          src: '/woodworking/pumpe/pumpe_4.jpg',
          description: this.$t('lorem_ipsum_1')
        },
        {
          src: '/woodworking/pumpe/pumpe_1.jpg',
          description: this.$t('lorem_ipsum_1')
        },
        {
          src: '/woodworking/pumpe/pumpe_2.jpg',
          description: this.$t('lorem_ipsum_1')
        },
        {
          src: '/woodworking/pumpe/pumpe_3.jpg',
          description: this.$t('lorem_ipsum_1')
        }
      ],
      weitere: [
        {
          src: '/woodworking/weitere/kamin.jpg',
          description: this.$t('wood_working_description_weitere_1')
        },
        {
          src: '/woodworking/weitere/klapptisch.jpg',
          description: this.$t('wood_working_description_weitere_3')
        },
        {
          src: '/woodworking/weitere/anhaenger.jpg',
          description: this.$t('wood_working_description_weitere_3')
        }
      ]
    }
  },

  mounted () {
    setTimeout(() => (this.show.title = true), 100)
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })

    setTimeout(() => (this.show.title = true), 500)
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
