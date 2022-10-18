<template>
  <div>
    <v-row
      align="center"
      justify="center"
    >
      <div class="text-h4 secondary--text ml-5 pa-2">Experience</div>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-spacer></v-spacer>
      <project-tile
        :icon="mdiMapMarkerRadius"
        title="Geoinformation systems"
        subtitle="Hallo das ist Inhalt"
        color-text="secondary"
        color-tile="#C6D2CB"
      />
      <project-tile
        :icon="mdiGraph"
        title="Stream processing"
        subtitle="Hallo das ist Inhalt"
        color-text="secondary"
        color-tile="#C6D2CB"
      />
      <project-tile
        :icon="mdiThermometer"
        title="Energy monitoring"
        subtitle="Hallo das ist Inhalt"
        color-text="secondary"
        color-tile="#C6D2CB"
      />
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
import { mdiAnchor, mdiThermometer, mdiMapMarkerRadius, mdiGraph } from '@mdi/js'
import ProjectTile from "~/components/projects/projectsTile";
export default {
  name: 'sectionExperience',
  components: { ProjectTile },

  data () {
    return {
      mdiAnchor,
      mdiThermometer,
      mdiMapMarkerRadius,
      mdiGraph
    }
  }
}
</script>
