<template>
  <div>
    <v-row
      align="center"
      justify="center"
    >
      <div class="text-h4 secondary--text ml-5 pa-2">
        {{ $t('section_title_experience') }}
      </div>
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
          <project-tile
            :icon="mdiMapMarkerRadius"
            :title="$t('gis_title').toString()"
            color-text="secondary"
            color-tile="#C6D2CB"
            to="/gis"
          />
          <project-tile
            :icon="mdiGraph"
            :title="$t('stream_processing_title').toString()"
            color-text="secondary"
            color-tile="#C6D2CB"
            to="/stream-processing"
          />
          <project-tile
            :icon="mdiThermometer"
            :title="$t('energy_monitoring_title').toString()"
            color-text="secondary"
            color-tile="#C6D2CB"
            to="/energy-monitoring"
          />
        </v-row>
        <v-row
          no-gutters
          align="center"
          justify="center"
        >
          <project-tile
            :icon="mdiBookEducation"
            :title="$t('citizen_science_title').toString()"
            color-text="secondary"
            color-tile="#C6D2CB"
            to="/citizen-science"
          />
          <project-tile
            :icon="mdiChartBellCurve"
            :title="$t('geostatistics_title').toString()"
            color-text="secondary"
            color-tile="#C6D2CB"
            to="/geostatistics"
          />
          <project-tile
            :icon="mdiCodeTags"
            :title="$t('software_development_title').toString()"
            color-text="secondary"
            color-tile="#C6D2CB"
            to="/software-development"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiAnchor, mdiThermometer, mdiMapMarkerRadius, mdiGraph, mdiBookEducation, mdiChartBellCurve, mdiCodeTags } from '@mdi/js'
import ProjectTile from '~/components/projects/projectsTile'

export default {
  name: 'SectionExperience',
  components: { ProjectTile },

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
