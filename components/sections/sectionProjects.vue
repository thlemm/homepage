<template>
  <div>
    <v-row
      class="text-center"
      align="center"
      justify="center"
    >
      <span class="text-h4 primary--text pa-2">
        {{ $t('section_title_projects') }}
      </span>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col :cols="isMobile ? 12 : 7">
        <v-row
          no-gutters
          align="center"
          justify="center"
        >
          <span class="text-h5 primary--text pa-2">
            {{ $t('section_subtitle_projects_projects') }}
          </span>
          <project-tile
            v-for="project in projects"
            :key="project.title"
            :height="120"
            :width="'88%'"
            :title="project.title"
            :color-tile="'light'"
            :color-text="'black'"
            :text="project.text"
            :img="project.img"
            :tags="project.tags"
            :to="project.link"
            :is-mobile="isMobile"
          />
        </v-row>
        <v-row
          no-gutters
          align="center"
          justify="center"
        >
          <span class="text-h5 primary--text pa-2 mt-3">
            {{ $t('section_subtitle_projects_contributions') }}
          </span>
          <project-tile
            v-for="contribution in contributions"
            :key="contribution.title"
            :height="120"
            :width="'88%'"
            :title="contribution.title"
            :color-tile="'light'"
            :color-text="'black'"
            :text="contribution.text"
            :img="contribution.img"
            :tags="contribution.tags"
            :to="contribution.link"
            :is-mobile="isMobile"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiAnchor, mdiChartBarStacked, mdiCellphoneText, mdiHandSaw } from '@mdi/js'
import ProjectTile from '~/components/tiles/projectTile'
import projectInfo from '~/static/projects/projectInfo.json'
import contributionInfo from '~/static/projects/contributionInfo.json'

export default {
  name: 'SectionProjects',
  components: { ProjectTile },

  data () {
    return {
      mdiAnchor,
      mdiChartBarStacked,
      mdiCellphoneText,
      mdiHandSaw,
      isMobile: false,
      projects: projectInfo,
      contributions: contributionInfo
    }
  },

  mounted () {
    setTimeout(() => (this.show.title = true), 100)
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
