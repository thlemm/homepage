<template>
  <div>
    <v-row
      class="text-center"
      align="center"
      justify="center"
    >
      <span class="text-h4 primary--text pa-2">
        {{ $t('section_title_publications') }}
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
          <publication-tile
            v-for="(publication, i) in publications"
            :key="i"
            :height="50"
            :width="'88%'"
            :title="publication.title"
            :issue="publication.issue"
            :color-tile="publication.color"
            :color-text="'black'"
            :publisher="publication.publisher"
            :date="publication.date"
            :to="publication.link"
            :extern="publication.extern"
            :is-mobile="isMobile"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import publications from '~/static/publications/publications.json'
import PublicationTile from '~/components/tiles/publicationTile'

export default {
  name: 'SectionPublications',
  components: { PublicationTile },

  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      publications
    }
  }
}
</script>
