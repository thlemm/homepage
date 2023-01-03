<template>
  <div>
    <section-image id="image" />
    <section-details id="details" />
    <section-experience id="experience" />
    <section-projects id="projects" />
    <section-contact id="contact" />
  </div>
</template>

<script>

import SectionProjects from '~/components/sections/sectionProjects'
import SectionImage from '~/components/sections/sectionImage'
import SectionExperience from '~/components/sections/sectionExperience'
import SectionContact from '~/components/sections/sectionContact'
import SectionDetails from '~/components/sections/sectionDetails'

export default {
  name: 'Index',
  components: { SectionDetails, SectionContact, SectionExperience, SectionImage, SectionProjects }
}
</script>
