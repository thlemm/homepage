<template>
  <div>
    <page-title
      :title="$t('stream_processing_title').toString()"
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
              {{ $t('stream_processing_text_1') }}
            </v-card-text>
            <v-card-text class="mb-0 pl-10 text-subtitle-1" style="word-break: break-word; text-align: justify; font-style: italic;">
              {{ $t('stream_processing_text_2') }}
            </v-card-text>
            <v-card-text class="mb-2 pl-10 text-subtitle-1" style="word-break: break-word; text-align: justify; font-style: italic;">
              {{ $t('stream_processing_text_3') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('stream_processing_text_4') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              {{ $t('further_info_and_links') }}
              <ul>
                <li>{{ $t('stream_processing_link_description_1') }} <a :href="$t('stream_processing_link_address_1')" target="_self">{{ $t('stream_processing_link_alias_1') }}</a></li>
              </ul>
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              {{ $t('further_literature') }}
              <ul>
                <li>{{ $t('stream_processing_ref_1') }}</li>
              </ul>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import { mdiFormatQuoteOpen } from '@mdi/js'
import PageTitle from '~/components/main/pageTitle'
import ActionBackHome from '~/components/main/actionBackHome'

export default {
  name: 'PageStreamProcessing',
  components: { ActionBackHome, PageTitle },

  data () {
    return {
      mdiFormatQuoteOpen,
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
