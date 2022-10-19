<template>
  <div>
    <section-image />
    <section-details />
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
import SectionDetails from "~/components/sections/sectionDetails";
export default {
  name: 'index',
  components: {SectionDetails, SectionContact, SectionExperience, SectionImage, SectionProjects }
}
</script>
