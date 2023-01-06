<template>
  <div>
    <page-title
      :title="$t('gis_title').toString()"
      :show="show.title"
    />

    <action-back-home
      to="/#experience"
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
              {{ $t('gis_text_1') }}
            </v-card-text>
            <!---<v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('gis_text_2') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              Hier finden sich weiterführende Informationen:
              <ul>
                <li>Projekt-Website OpenGeoResearch: <a href="https://opengeoresearch.org/" target="_blank">OpenGeoResearch <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
                <li>Weitere Informationen zu Citizen Science: <a href="https://www.buergerschaffenwissen.de/netzwerk/ag-weissbuch" target="_blank">Bürger schaffen Wissen <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
                <li>FOSSGIS-Konferenz 2022: <a href="https://fossgis-konferenz.de/2022/" target="_blank">FOSSGIS <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
                <li>Forum Citizen Science 2022: <a href="https://www.buergerschaffenwissen.de/veranstaltungen/forum-citizen-science-2022" target="_blank">Forum Citizen Science <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
                <li>ECSA Conference 2022: <a href="https://2022.ecsa-conference.eu/startseite.html" target="_blank">ECSA <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
              </ul>
            </v-card-text>--->
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center"
          justify="start"
        >
          <v-card width="100%">
            <v-app-bar color="primary" height="44">
              <v-spacer />
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click="drawer = !drawer"
                  >
                    <v-icon>{{ mdiLayers }}</v-icon>
                  </v-btn>
                </template>
                <span>{{ $t('tooltip_gis_layers') }}</span>
              </v-tooltip>
            </v-app-bar>
            <v-card width="100%">
              <v-navigation-drawer
                :value="drawer"
                absolute
                right
              ></v-navigation-drawer>
              <gis-map
                :height="'500px'"
                :selectable="false"
              />
            </v-card>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiOpenInNew, mdiLayers } from '@mdi/js'
import ActionBackHome from '~/components/main/actionBackHome'
import PageTitle from '~/components/main/pageTitle'

export default {
  name: 'PageGis',
  components: { PageTitle, ActionBackHome },

  data () {
    return {
      mdiLayers,
      mdiOpenInNew,
      show: {
        title: false
      },
      isMobile: false,
      drawer: true
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
