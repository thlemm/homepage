<template>
  <div>
    <page-title
      :title="$t('software_development_title').toString()"
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
              {{ $t('software_development_text') }}
            </v-card-text>
            <v-card-text class="mb-0 pb-0 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('software_development_list_exp_title') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              <ul>
                <li>
                  {{ $t('software_development_list_exp_item_1') }}
                  <ul>
                    <li>{{ $t('software_development_list_exp_item_1_1') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_exp_item_2') }}
                  <ul>
                    <li>{{ $t('software_development_list_exp_item_2_1') }}</li>
                    <li>{{ $t('software_development_list_exp_item_2_2') }}</li>
                    <li>{{ $t('software_development_list_exp_item_2_3') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_exp_item_3') }}
                  <ul>
                    <li>
                      {{ $t('software_development_list_exp_item_3_1') }}
                      <ul>
                        <li>{{ $t('software_development_list_exp_item_3_1_1') }}</li>
                        <li>{{ $t('software_development_list_exp_item_3_1_2') }}</li>
                      </ul>
                    </li>
                    <li>{{ $t('software_development_list_exp_item_3_2') }}</li>
                    <li>{{ $t('software_development_list_exp_item_3_3') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_exp_item_4') }}
                  <ul>
                    <li>{{ $t('software_development_list_exp_item_4_1') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_exp_item_5') }}
                  <ul>
                    <li>{{ $t('software_development_list_exp_item_5_1') }}</li>
                    <li>{{ $t('software_development_list_exp_item_5_2') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_exp_item_6') }}
                  <ul>
                    <li>{{ $t('software_development_list_exp_item_6_1') }}</li>
                    <li>{{ $t('software_development_list_exp_item_6_2') }}</li>
                    <li>{{ $t('software_development_list_exp_item_6_3') }}</li>
                    <li>{{ $t('software_development_list_exp_item_6_4') }}</li>
                    <li>{{ $t('software_development_list_exp_item_6_5') }}</li>
                    <li>{{ $t('software_development_list_exp_item_6_6') }}</li>
                    <li>{{ $t('software_development_list_exp_item_6_7') }}</li>
                  </ul>
                </li>
              </ul>
            </v-card-text>
            <v-card-text class="mb-0 pb-0 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              {{ $t('software_development_list_tech_title') }}
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              <ul>
                <li>
                  {{ $t('software_development_list_tech_item_1') }}
                  <ul>
                    <li>{{ $t('software_development_list_tech_item_1_1') }}</li>
                    <li>{{ $t('software_development_list_tech_item_1_2') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_tech_item_2') }}
                  <ul>
                    <li>{{ $t('software_development_list_tech_item_2_1') }}</li>
                    <li>{{ $t('software_development_list_tech_item_2_2') }}</li>
                    <li>{{ $t('software_development_list_tech_item_2_3') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_tech_item_3') }}
                  <ul>
                    <li>{{ $t('software_development_list_tech_item_3_1') }}</li>
                    <li>{{ $t('software_development_list_tech_item_3_2') }}</li>
                    <li>{{ $t('software_development_list_tech_item_3_3') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_tech_item_4') }}
                  <ul>
                    <li>{{ $t('software_development_list_tech_item_4_1') }}</li>
                    <li>{{ $t('software_development_list_tech_item_4_2') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_tech_item_5') }}
                  <ul>
                    <li>{{ $t('software_development_list_tech_item_5_1') }}</li>
                    <li>{{ $t('software_development_list_tech_item_5_2') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('software_development_list_tech_item_6') }}
                </li>
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
