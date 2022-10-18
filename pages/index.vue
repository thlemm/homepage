<template>
  <div>
    <section-image />
    <section-experience />
    <section-projects />
    <section-contact />
  </div>
</template>

<script>

import SectionProjects from "~/components/sections/sectionProjects";
import SectionImage from "~/components/sections/sectionImage";
import SectionExperience from "~/components/sections/sectionExperience";
import SectionContact from "~/components/sections/sectionContact";
export default {
  name: 'index',
  components: {SectionContact, SectionExperience, SectionImage, SectionProjects }
}
</script>
