<template>
  <div>
    <section-image id="image" :is-mobile="isMobile" />
    <section-details id="details" />
    <section-projects id="projects" :is-mobile="isMobile" />
    <section-experience id="experience" :is-mobile="isMobile" />
    <section-more id="more" />
    <section-publications id="talks" :is-mobile="isMobile" />
    <section-talks id="talks" :is-mobile="isMobile" />
    <section-contact id="contact" :is-mobile="isMobile" />
  </div>
</template>

<script>

import SectionMore from '~/components/sections/sectionMore'
import SectionImage from '~/components/sections/sectionImage'
import SectionExperience from '~/components/sections/sectionExperience'
import SectionContact from '~/components/sections/sectionContact'
import SectionDetails from '~/components/sections/sectionDetails'
import SectionProjects from '~/components/sections/sectionProjects'
import SectionTalks from '~/components/sections/sectionTalks'
import SectionPublications from '~/components/sections/sectionPublications'

export default {
  name: 'Index',
  components: { SectionPublications, SectionTalks, SectionProjects, SectionDetails, SectionContact, SectionExperience, SectionImage, SectionMore },

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
