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
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('gis_text_2') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              {{ $t('further_info_and_links') }}
              <ul>
                <li>{{ $t('gis_link_description_1') }} <a :href="$t('gis_link_address_1')" target="_blank">{{ $t('gis_link_alias_1') }} <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
                <li>{{ $t('gis_link_description_2') }} <a :href="$t('gis_link_address_2')" target="_blank">{{ $t('gis_link_alias_2') }} <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
                <li>{{ $t('gis_link_description_3') }} <a :href="$t('gis_link_address_3')" target="_blank">{{ $t('gis_link_alias_3') }} <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
              </ul>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          align="center"
          justify="start"
        >
          <v-col cols="12" align-self="start">
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('gis_text_3') }}
            </v-card-text>
            <v-card-text width="100%">
              <v-app-bar color="primary" height="44" clipped-right>
                <v-spacer />
                <v-tooltip bottom>
                  <template #activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="tertiary"
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
                  v-show="drawer"
                  :value="drawer"
                  width="350"
                  absolute
                  right
                  clipped
                >
                  <v-card class="pa-2" elevation="0">
                    <v-menu
                      v-for="(layer, i) in layers.overlays"
                      :key="i"
                      bottom
                      left
                      offset-y
                      absolute
                    >
                      <template #activator="{ on }">
                        <v-checkbox
                          :input-value="layer.visible"
                          :label="layer.title"
                          :append-icon="mdiInformationOutline"
                          hide-details
                          :color="layer.color"
                          @change="setLayerVisibility($event, layer.id)"
                          @click:append="on.click"
                        />
                      </template>
                      <v-card class="pa-1">
                        <v-img width="220" contain :src="layer.legend" />
                        <v-card-text>
                          Quelle: Land NRW unter <a href="http://www.govdata.de/dl-de/by-2-0" target="_blank">dl-de/by-2-0</a>
                        </v-card-text>
                      </v-card>
                    </v-menu>
                  </v-card>
                </v-navigation-drawer>
                <gis-map
                  :height="'500px'"
                  :selectable="false"
                />
              </v-card>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiOpenInNew, mdiLayers, mdiInformationOutline } from '@mdi/js'
import ActionBackHome from '~/components/main/actionBackHome'
import PageTitle from '~/components/main/pageTitle'
// eslint-disable-next-line camelcase
import layer_config from '~/static/map/layer_config.json'

export default {
  name: 'PageGis',
  components: { PageTitle, ActionBackHome },

  data () {
    return {
      mdiLayers,
      mdiOpenInNew,
      mdiInformationOutline,
      show: {
        title: false
      },
      isMobile: false,
      drawer: true,
      // eslint-disable-next-line camelcase
      layers: layer_config
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
    },
    setLayerVisibility (event, layerId) {
      this.$nuxt.$emit('setLayerVisibility', layerId, !!event)
    }
  }
}
</script>
