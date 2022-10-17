<template>
  <v-row
    no-gutters
    align="center"
    justify="center"
  >
    <v-spacer></v-spacer>
    <project-tile></project-tile>
    <project-tile></project-tile>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>

import ProjectTile from "~/components/projects/projectsTile";
export default {
  name: 'sectionsProjects',
  components: { ProjectTile },
  data () {
    return {

    }
  }
}
</script>
