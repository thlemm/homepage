<template>
  <div>
    <section-image id="image" :is-mobile="isMobile" />
    <section-details id="details" />
    <section-projects id="projects" :is-mobile="isMobile" />
    <section-experience id="experience" :is-mobile="isMobile" />
    <section-more id="more" :is-mobile="isMobile" />
    <section-certs id="certs" :is-mobile="isMobile" />
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
import SectionCerts from '~/components/sections/sectionCerts'

export default {
  name: 'Index',
  components: { SectionCerts, SectionPublications, SectionTalks, SectionProjects, SectionDetails, SectionContact, SectionExperience, SectionImage, SectionMore },

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
