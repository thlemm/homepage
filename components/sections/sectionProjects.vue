<template>
  <div>
    <v-row
      class="text-center"
      align="center"
      justify="center"
    >
      <span class="text-h4 primary--text ml-5 pa-2">
        {{ $t('section_title_projects') }}
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
          <project-tile
            :height="200"
            :width="'100%'"
            title="Mein Projekt mit Namen"
            :color-tile="'primary'"
            :color-text="'black'"
            text="Hallo ich bin einen kurze BEschreibung dieses Projekts"
            :img="'/woodworking/christmas/tannen_2.jpg'"
            :tags="['java', 'apache flink']"
          ></project-tile>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiAnchor, mdiChartBarStacked, mdiCellphoneText, mdiHandSaw } from '@mdi/js'
import ProjectTile from '~/components/tiles/projectTile'

export default {
  name: 'SectionProjects',
  components: { ProjectTile },

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
