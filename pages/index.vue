<template>
  <div>
    <v-card height="300" color="tertiary" elevation="0"></v-card>
    <sections-projects></sections-projects>
  </div>
</template>

<script>

import SectionsProjects from "~/components/sections/sectionProjects";
export default {
  name: 'index',
  components: { SectionsProjects }
}
</script>
