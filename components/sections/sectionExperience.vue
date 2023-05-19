<template>
  <div>
    <v-row
      class="text-center"
      align="center"
      justify="center"
    >
      <span class="text-h4 secondary--text pa-2">
        {{ $t('section_title_experience') }}
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
            :icon="mdiMapMarkerRadius"
            :title="$t('gis_title').toString()"
            color-text="secondary"
            color-tile="light"
            to="/gis"
          />
          <subpage-tile
            :icon="mdiGraph"
            :title="$t('stream_processing_title').toString()"
            color-text="secondary"
            color-tile="light"
            to="/stream-processing"
          />
          <subpage-tile
            :icon="mdiThermometer"
            :title="$t('energy_monitoring_title').toString()"
            color-text="secondary"
            color-tile="light"
            to="/energy-monitoring"
          />
        </v-row>
        <v-row
          no-gutters
          align="center"
          justify="center"
        >
          <subpage-tile
            :icon="mdiBookEducation"
            :title="$t('citizen_science_title').toString()"
            color-text="secondary"
            color-tile="light"
            to="/citizen-science"
          />
          <subpage-tile
            :icon="mdiChartBellCurve"
            :title="$t('geostatistics_title').toString()"
            color-text="secondary"
            color-tile="light"
            to="/geostatistics"
          />
          <subpage-tile
            :icon="mdiCodeTags"
            :title="$t('software_development_title').toString()"
            color-text="secondary"
            color-tile="light"
            to="/software-development"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiAnchor, mdiThermometer, mdiMapMarkerRadius, mdiGraph, mdiBookEducation, mdiChartBellCurve, mdiCodeTags } from '@mdi/js'
import SubpageTile from '~/components/tiles/subpageTile'

export default {
  name: 'SectionExperience',
  components: { SubpageTile },

  data () {
    return {
      mdiAnchor,
      mdiThermometer,
      mdiMapMarkerRadius,
      mdiGraph,
      mdiBookEducation,
      mdiChartBellCurve,
      mdiCodeTags
    }
  }
}
</script>
