<template>
  <div>
    <v-row
      class="text-center"
      align="center"
      justify="center"
    >
      <span class="text-h4 primary--text pa-2 mr-3 ml-3">
        {{ $t('section_title_more') }}
      </span>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col cols="9">
        <v-row
          no-gutters
          align="center"
          justify="center"
        >
          <subpage-tile
            :icon="mdiChartBarStacked"
            :title="$t('visualization_title').toString()"
            color-text="primary"
            color-tile="light"
            to="/visualization"
          />
          <subpage-tile
            :icon="mdiCellphoneText"
            :title="$t('catalog_title').toString()"
            color-text="primary"
            color-tile="light"
            to="/catalog"
          />
          <subpage-tile
            :icon="mdiHandSaw"
            :title="$t('wood_working_title').toString()"
            color-text="primary"
            color-tile="light"
            to="/wood-working"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiAnchor, mdiChartBarStacked, mdiCellphoneText, mdiHandSaw } from '@mdi/js'
import SubpageTile from '~/components/tiles/subpageTile'

export default {
  name: 'SectionMore',
  components: { SubpageTile },

  data () {
    return {
      mdiAnchor,
      mdiChartBarStacked,
      mdiCellphoneText,
      mdiHandSaw
    }
  }
}
</script>
