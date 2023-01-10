<template>
  <div>
    <page-title
      :title="$t('geostatistics_title').toString()"
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
            <v-card-text class="mb-0 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('geostatistics_text_1') }}
            </v-card-text>
            <v-card-text class="mb-0 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('geostatistics_text_2') }}
            </v-card-text>
            <v-card-text class="mb-0 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('geostatistics_text_3') }}
            </v-card-text>
            <v-card-text class="mb-1 mt-0 pt-0 pb-0 pl-10 text-subtitle-1" style="word-break: break-word; text-align: justify; font-style: italic;">
              {{ $t('geostatistics_text_4') }}
            </v-card-text>
            <v-card-text class="mb-1 mt-0 pt-0 pb-0 pl-15 text-subtitle-1" style="word-break: break-word; text-align: justify; font-style: italic; font-weight: bold">
              {{ $t('geostatistics_text_5') }}
            </v-card-text>
            <v-card-text class="mb-1 mt-0 pt-0 pb-0 pl-10 text-subtitle-1" style="word-break: break-word; text-align: justify; font-style: italic;">
              {{ $t('geostatistics_text_6') }}
            </v-card-text>
            <v-card-text class="mb-3 mt-0 pt-0 pb-0 pl-15 text-subtitle-1" style="word-break: break-word; text-align: justify; font-style: italic; font-weight: bold">
              {{ $t('geostatistics_text_7') }}
            </v-card-text>
            <v-card-text class="mb-1 mt-0 pt-0 pb-0 pl-10 text-subtitle-1" style="word-break: break-word; text-align: justify; font-style: italic;">
              {{ $t('geostatistics_text_8') }}
            </v-card-text>
            <v-card-text class="mb-0 mt-0 pt-0 pl-10 text-subtitle-1" style="word-break: break-word; text-align: justify; font-style: italic;">
              {{ $t('geostatistics_text_9') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('geostatistics_text_10') }}
            </v-card-text>

            <v-card-text class="mb-3 text-subtitle-1">
              {{ $t('further_info_and_links') }}
              <ul>
                <li>{{ $t('geostatistics_link_description_1') }} <a :href="$t('geostatistics_link_address_1')" target="_self">{{ $t('geostatistics_link_alias_1') }}</a></li>
                <li>{{ $t('geostatistics_link_description_2') }} <a :href="$t('geostatistics_link_address_2')" target="_self">{{ $t('geostatistics_link_alias_2') }}</a></li>
              </ul>
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              {{ $t('further_literature') }}
              <ul>
                <li>{{ $t('geostatistics_ref_1') }}</li>
                <li>{{ $t('geostatistics_ref_2') }}</li>
                <li>{{ $t('geostatistics_ref_3') }}</li>
                <li>{{ $t('geostatistics_ref_4') }}</li>
                <li>{{ $t('geostatistics_ref_5') }}</li>
                <li>{{ $t('geostatistics_ref_6') }}</li>
              </ul>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'
import ActionBackHome from '~/components/main/actionBackHome'
import PageTitle from '~/components/main/pageTitle'

export default {
  name: 'PageCitizenScience',
  components: { PageTitle, ActionBackHome },

  data () {
    return {
      mdiOpenInNew,
      show: {
        title: false
      },
      isMobile: false
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
