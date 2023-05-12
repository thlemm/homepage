<template>
  <div>
    <section-image id="image" :is-mobile="isMobile" />
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
  components: { SectionDetails, SectionContact, SectionExperience, SectionImage, SectionProjects },

  data () {
    return {
      isMobile: false
    }
  },

  mounted () {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },

  beforeDestroy () {
    if (typeof window === 'undefined') { return }

    window.removeEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 900
    }
  }
}
</script>
