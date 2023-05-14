<template>
  <div>
    <v-row
      class="text-center"
      align="center"
      justify="center"
    >
      <span class="text-h4 primary--text ml-5 pa-2">
        {{ $t('section_title_projects') }}
      </span>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col cols="5">
        <v-row
          no-gutters
          align="center"
          justify="center"
        >
          <project-tile
            v-for="project in projects"
            :key="project.title"
            :height="150"
            :width="'88%'"
            :title="project.title"
            :color-tile="'#C6D2CB'"
            :color-text="'black'"
            :text="project.text"
            :img="project.img"
            :tags="project.tags"
            :to="project.link"
          ></project-tile>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiAnchor, mdiChartBarStacked, mdiCellphoneText, mdiHandSaw } from '@mdi/js'
import ProjectTile from '~/components/tiles/projectTile'

export default {
  name: 'SectionProjects',
  components: { ProjectTile },

  data () {
    return {
      mdiAnchor,
      mdiChartBarStacked,
      mdiCellphoneText,
      mdiHandSaw,
      projects: [{
        title: 'OpenGeoResearch',
        text: 'Eine partizipative Plattform für wissenschaftliche raumbezogene Fragestellungen im Ramhen des Wissensschaftsjahres 2022.',
        img: '/projects/opengeoresearch.png',
        tags: [{ tag: 'javascript', color: 'primary' }, { tag: 'nuxt', color: 'secondary' }, { tag: 'vue', color: 'secondary' }, { tag: 'java', color: 'primary' }, { tag: 'spring boot', color: 'secondary' }, { tag: 'postgres', color: 'tertiary' }, { tag: 'postgis', color: 'tertiary' }, { tag: 'pwa', color: 'error' }],
        link: 'https://opengeoresearch.org',
        extern: true
      }]
    }
  }
}
</script>
