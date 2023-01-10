<template>
  <div>
    <page-title
      :title="$t('citizen_science_title').toString()"
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
              {{ $t('citizen_science_text_1') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('citizen_science_text_2') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              {{ $t('further_info_and_links') }}
              <ul>
                <li>{{ $t('citizen_science_link_description_1') }} <a :href="$t('citizen_science_link_address_1')" target="_blank">{{ $t('citizen_science_link_alias_1') }} <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
                <li>{{ $t('citizen_science_link_description_2') }} <a :href="$t('citizen_science_link_address_2')" target="_blank">{{ $t('citizen_science_link_alias_2') }} <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
                <li>{{ $t('citizen_science_link_description_3') }} <a :href="$t('citizen_science_link_address_3')" target="_blank">{{ $t('citizen_science_link_alias_3') }} <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
                <li>{{ $t('citizen_science_link_description_4') }} <a :href="$t('citizen_science_link_address_4')" target="_blank">{{ $t('citizen_science_link_alias_4') }} <v-icon small>{{ mdiOpenInNew }}</v-icon></a></li>
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
