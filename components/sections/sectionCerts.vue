<template>
  <div>
    <v-row
      class="text-center"
      align="center"
      justify="center"
    >
      <span class="text-h4 primary--text pa-2">
        {{ $t('section_title_certs') }}
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
          <cert-tile
            :height="100"
            :width="'88%'"
            :is-mobile="isMobile"
            :color-tile="'light'"
            :color-text="'black'"
            title="Professional Scrum Master™ I (PSM I)"
            issuer-name="Scrum.org"
            issuer-link="https://www.credly.com/organizations/scrum-org/badges"
            badge="certs/professional-scrum-master-i-psm-i.png"
            :skills="['Agile', 'PSM', 'Scrum', 'Scrum Master']"
            to="https://www.credly.com/badges/3a3d2010-badc-4cfb-8897-517e3ede7e39/public_url"
            :extern="true"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CertTile from '~/components/tiles/certTile'

export default {
  name: 'SectionCerts',
  components: { CertTile },

  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
    }
  }
}
</script>
