<template>
  <div>
    <page-title
      :title="$t('software_development_title').toString()"
      :show="show.title"
    />

    <action-back-home
      to="/#experience"
      :cols="isMobile ? 10 : 8"
    />

    <v-row
      align="center"
      justify="center"
      class="mb-15"
    >
      <v-col :cols="isMobile ? 10 : 8">
        <v-row
          no-gutters
          align="center"
          justify="start"
        >
          <v-col cols="12" align-self="start">
            <v-card-text class="mb-3 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              Mein Interesse für Programmierung und Softwareentwicklung wurde schon in der Schule geweckt. Im Informatikunterricht lernte ich einfache Anwendungen mit Java und SQL zu entwickeln und hatte schnell Spaß daran gefunden auch außerhalb der Schule eigene kleine Anwendungen zu programmieren. Während meines Studiums im Bauingenieurwesen in Aachen habe ich dieses Interesse stetig weiterverfolgt. Sowohl in Rahmen meines freiwilligen Engagements in der Netzwerk-AG meines Studierendenwohnheims als auch in meinen verschiedenen Tätigkeiten als studentische Hilfskraft habe ich meine Kenntnisse in der Softwareentwicklung erfolgreich anwenden und weiterentwickeln können. In meinen Abschlussarbeiten (Bachelor und Master) konnte ich meine Erfahrungen in der Programmierung gut einbringen und weiterentwickeln und so spannende Themen im Bereich der Bau- und Geoinformatik erfolgreich bearbeiten. Auch nach Abschluss meines Studiums habe ich die Softwareentwicklung weiterverfolgt und im Bereich der Geoinformationssysteme vertiefen und dabei vielseitige Erfahrungen machen können.
            </v-card-text>
            <v-card-text class="mb-0 pb-0 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              Einige meiner Erfahrungen und Tätigkeiten in der Softwareentwicklung habe ich hier zusammengefasst:
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              <ul>
                <li>
                  Erste Erfahrungen im Informatikunterricht in der Schule
                  <ul>
                    <li>Einfache Anwendungen Java und SQL</li>
                  </ul>
                </li>
                <li>
                  Engagement in der Netzwerk-AG in Studierendenwohnanlage während des Studiums
                  <ul>
                    <li>Nutzerdatenverwaltung, Support für die Netzwerkadministration</li>
                    <li>Kalender und Raumbuchungssysteme für Gemeinschaftsräume</li>
                    <li>Info-Screen mit aktuellen Nachrichten, Busfahrplan und Speisekarte der Mensa</li>
                  </ul>
                </li>
                <li>
                  Tätigkeiten als studentische Hilfskraft während des Studiums
                  <ul>
                    <li>
                      Webanwendungen für Sensordatenverwaltung
                      <ul>
                        <li>Backend: PHP und Python</li>
                        <li>Frontend: JavaScript und HTML-Template-Engines</li>
                      </ul>
                    </li>
                    <li>Programmierung auf Arduino und Raspberry-Pi für Sensorabfrage, One-Wire-Sensoren</li>
                    <li>App-Entwicklung für Smartphones als Progressive Web App (PWA)</li>
                  </ul>
                </li>
                <li>
                  Private Projekte
                  <ul>
                    <li>Smartphone-App zur gemeinschaftlichen digitalen Verwaltung und Auflösung eines Hausstands</li>
                  </ul>
                </li>
                <li>
                  Abschlussarbeiten
                  <ul>
                    <li>Lightweight Sensordatenlogger mit Datenbank, Sensor-BUS, Backend (Verwaltung, Plausibilitätsprüfung), Web-Frontend (Konfiguration, Datenvisualisierung) auf Einplatinencomputern</li>
                    <li>Distributed Stream Processing Applikation für Analyse raum-zeitlicher Autokorrelation in Geodatenströmen in Echtzeit</li>
                  </ul>
                </li>
                <li>
                  Tätigkeit als wissenschaftlicher Mitarbeiter
                  <ul>
                    <li>Produktive Web-GIS-Anwendungen mit Forum und Verwaltungsoberflächen im Rahmen des Projekts OpenGeoResearch innerhalb des Wissenschaftsjahres 2022</li>
                    <li>GIS-Anwendungen mit verteilten Architekturen (SOA)</li>
                    <li>Management von User Generated Content, Anwendung künstlicher Neuronaler Netze zur automatisierten Erkennung unerwünschter Inhalte</li>
                    <li>App-Entwicklung, PWA, mobiles GIS</li>
                    <li>Webbasierte BIM-Tools</li>
                    <li>Entwicklung von intuitiven und benutzerfreundlichen Weboberflächen für Partizipation an der Wissenschaft</li>
                    <li>Mitarbeit in der Hochschullehre in den Bereichen Bauinformatik, Java-Programmierung, Geoinformationssysteme und verteilte Geoinformationssysteme</li>
                  </ul>
                </li>
              </ul>
            </v-card-text>
            <v-card-text class="mb-0 pb-0 text-subtitle-1" style="word-break: break-word; text-align: justify;">
              Mit diesen Technologien habe ich bisher gearbeitet:
            </v-card-text>
            <v-card-text class="mb-3 text-subtitle-1">
              <ul>
                <li>
                  Frontend (Web)
                  <ul>
                    <li>JavaScript, Frameworks Vue.js, Nuxt.js</li>
                    <li>JavaScript Bibliotheken zur Datenvisualisierung: Highcharts, D3, C3, OpenLayers, Cesium, IFC.js</li>
                  </ul>
                </li>
                <li>
                  Backend (Web)
                  <ul>
                    <li>Java, Spring Boot</li>
                    <li>Python, Bottle (Micro Web-Framework)</li>
                    <li>PHP</li>
                  </ul>
                </li>
                <li>
                  Backend (Stream processing)
                  <ul>
                    <li>Apache Flink</li>
                    <li>Apache Kafka</li>
                    <li>Apache ZooKeeper</li>
                  </ul>
                </li>
                <li>
                  Datenbank
                  <ul>
                    <li>Relationale Datenbanken: PostgreSQL, PostGIS, MySQL, MariaDB</li>
                    <li>Tools zur Verwaltung: Hibernate, Liquibase</li>
                  </ul>
                </li>
                <li>
                  Tools
                  <ul>
                    <li>Containerization: Docker</li>
                    <li>CD/CI: GitLab-Workers</li>
                  </ul>
                </li>
                <li>
                  Programmiersprachen: Java, JavaScript, Python, PHP, C, SQL, Fortran
                </li>
              </ul>
            </v-card-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiOpenInNew } from '@mdi/js'
import ActionBackHome from '~/components/main/actionBackHome'
import PageTitle from '~/components/main/pageTitle'

export default {
  name: 'PageCitizenScience',
  components: { PageTitle, ActionBackHome },

  data () {
    return {
      mdiOpenInNew,
      show: {
        title: false
      },
      isMobile: false
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
