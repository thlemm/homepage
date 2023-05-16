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
      <v-col :cols="isMobile ? 12 : 7">
        <v-row
          no-gutters
          align="center"
          justify="center"
        >
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
      isMobile: false,
      projects: [{
        title: 'OpenGeoResearch',
        text: 'Forschungsprojekt: Eine partizipative Plattform für wissenschaftliche raumbezogene Fragestellungen im Ramhen des Wissensschaftsjahres 2022.',
        img: '/projects/opengeoresearch.png',
        tags: [{ tag: 'javascript', color: 'primary' }, { tag: 'nuxt', color: 'secondary' }, { tag: 'vue', color: 'secondary' }, { tag: 'java', color: 'primary' }, { tag: 'spring boot', color: 'secondary' }, { tag: 'sql', color: 'primary' }, { tag: 'postgres', color: 'tertiary' }, { tag: 'postgis', color: 'tertiary' }, { tag: 'gis', color: 'error' }, { tag: 'IoT', color: 'error' }, { tag: 'pwa', color: 'error' }],
        link: 'https://opengeoresearch.org',
        extern: true
      },
      {
        title: 'Spatiotemporal autocorrelation with Apache Flink',
        text: 'Distributed stream processing chain to calculate spatiotemporal autocorrelation in real-time',
        img: '',
        tags: [{ tag: 'java', color: 'primary' }, { tag: 'apache flink', color: 'secondary' }, { tag: 'apache kafka', color: 'secondary' }, { tag: 'apache zookeeper', color: 'secondary' }, { tag: 'distributed stream processing', color: 'error' }],
        link: 'https://github.com/thlemm/spatio-temporal-autocorrelation-with-apache-flink',
        extern: true
      },
      {
        title: 'Live data visualization',
        text: 'Ein webbasiertes Tool zur Visualisierung räumlicher und statistischer Daten mit push-basierter Schnittstelle via Websocket zu Apache Kafka topics',
        img: '',
        tags: [{ tag: 'javascript', color: 'primary' }, { tag: 'highcharts', color: 'secondary' }, { tag: 'nuxt', color: 'secondary' }, { tag: 'vue', color: 'secondary' }, { tag: 'apache kafka', color: 'secondary' }],
        link: 'https://github.com/thlemm/live-data-visualization-with-highcharts',
        extern: true
      },
      {
        title: 'AMSEL',
        text: 'Ein Datenlogger zum automatisierten Auslesen intelligenter Stromzähler umgesetzt mit Open-Source-Software auf einem Einplatinencomputer.',
        img: '',
        tags: [{ tag: 'python', color: 'primary' }, { tag: 'bottle', color: 'secondary' }, { tag: 'sql', color: 'primary' }, { tag: 'mysql', color: 'tertiary' }, { tag: 'C', color: 'primary' }, { tag: 'm-bus', color: 'error' }, { tag: 'IoT', color: 'error' }],
        link: '',
        extern: false
      },
      {
        title: 'Katalog-App',
        text: 'Eine Smartphone-App zur gemeinschaftlichen digitalen Verwaltung und Auflösung eines Hausstands',
        img: '',
        tags: [{ tag: 'javascript', color: 'primary' }, { tag: 'php', color: 'primary' }, { tag: 'nuxt', color: 'secondary' }, { tag: 'vue', color: 'secondary' }, { tag: 'java', color: 'primary' }, { tag: 'spring boot', color: 'secondary' }, { tag: 'sql', color: 'primary' }, { tag: 'postgres', color: 'tertiary' }, { tag: 'pwa', color: 'error' }],
        link: '',
        extern: false
      },
      {
        title: 'Homepage',
        text: '',
        img: '',
        tags: [{ tag: 'javascript', color: 'primary' }, { tag: 'nuxt', color: 'secondary' }, { tag: 'vue', color: 'secondary' }],
        link: '',
        extern: false
      },
      {
        title: 'SeilNet - Kalender',
        text: '',
        img: '',
        tags: [{ tag: 'python', color: 'primary' }, { tag: 'bottle', color: 'secondary' }, { tag: 'mediawiki', color: 'tertiary' }],
        link: '',
        extern: false
      },
      {
        title: 'SeilNet - Buchungssystem und Schlüsselverwaltung',
        text: '',
        img: '',
        tags: [{ tag: 'python', color: 'primary' }, { tag: 'bottle', color: 'secondary' }, { tag: 'sql', color: 'primary' }, { tag: 'mysql', color: 'tertiary' }],
        link: '',
        extern: false
      },
      {
        title: 'BIMxD-Bauwerksmonitoring',
        text: 'Forschungsprojekt: Sensor- und BIM-basiertes Bauwerksmonitoring von Wasserbauwerken',
        img: '',
        tags: [{ tag: 'BIM', color: 'error' }],
        link: 'https://www.sfbtrr339.de/de/projekt/projektbereich-b/b01',
        extern: true
      },
      {
        title: 'EnEff:Wärme: GeoWaermeWende ',
        text: 'Forschungsprojekt: Geoportal-basiertes Monitoring eines geothermisch gespeisten kalten Nahwärmenetzes als Beitrag zur Wärmewende mit aktiver Nutzereinbindung',
        img: '',
        tags: [{ tag: 'javascript', color: 'primary' }, { tag: 'nuxt', color: 'secondary' }, { tag: 'vue', color: 'secondary' }, { tag: 'java', color: 'primary' }, { tag: 'spring boot', color: 'secondary' }, { tag: 'sql', color: 'primary' }, { tag: 'postgres', color: 'tertiary' }, { tag: 'postgis', color: 'tertiary' }, { tag: 'gis', color: 'error' }],
        link: 'http://www.gia.rwth-aachen.de/GeoWaermeWende',
        extern: true
      },
      {
        title: 'Straße der Zukunft (SFB TRR 339 Teilprojekt B01)',
        text: 'Forschungsprojekt: Adaptives geometrisch-semantisches multi-LOD Bauwerksmodell der Straßeninfrastruktur des Cyber-Physical System (CPS) Straße',
        img: '',
        tags: [{ tag: 'javascript', color: 'primary' }, { tag: 'java', color: 'primary' }, { tag: 'BIM', color: 'error' }, { tag: 'IoT', color: 'error' }],
        link: 'http://www.gia.rwth-aachen.de/BIMxD-Bauwerksmonitoring',
        extern: true
      }]
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
