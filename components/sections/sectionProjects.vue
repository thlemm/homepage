<template>
  <div>
    <v-row
      align="center"
      justify="center"
    >
      <div class="text-h4 primary--text ml-5 pa-2">Projects</div>
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
            :icon="mdiChartBarStacked"
            title="Live data visualization"
            subtitle="Hallo das ist Inhalt"
            color-text="primary"
            color-tile="#C6D2CB"
            to="/visualization"
          />
          <project-tile
            :icon="mdiCellphoneText"
            :title="$t('catalog_title').toString()"
            subtitle="Hallo das ist Inhalt"
            color-text="primary"
            color-tile="#C6D2CB"
            to="/catalog"
          />
          <project-tile
            :icon="mdiHandSaw"
            title="Wood working"
            subtitle="Hallo das ist Inhalt"
            color-text="primary"
            color-tile="#C6D2CB"
            to="/wood-working"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiAnchor, mdiChartBarStacked, mdiCellphoneText, mdiHandSaw } from '@mdi/js'
import ProjectTile from "~/components/projects/projectsTile";
export default {
  name: 'sectionProjects',
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
