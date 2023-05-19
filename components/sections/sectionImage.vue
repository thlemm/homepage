<template>
  <v-card color="background" elevation="0" height="100vh">
    <v-card color="background" elevation="0" height="25vh">
      <v-select
        v-if="false"
        v-model="selectedLocale"
        class="ma-2"
        :items="availableLocales"
        item-text="code"
        item-value="code"
        style="max-width: 50px;"
        dense
      />
    </v-card>
    <v-row no-gutters :class="isMobile ? 'pl-2 pr-2' : ''">
      <v-spacer />
      <v-card class="ma-0 pa-0" width="600" color="background" elevation="0">
        <v-card-title class="ma-0 pa-0 text-h4 font-weight-light">
          <v-spacer />
          {{ $t('details_name') }}
        </v-card-title>
      </v-card>
      <v-spacer />
    </v-row>
    <v-row
      no-gutters
      :class="isMobile ? 'pl-2 pr-2' : ''"
      align="center"
      justify="center"
    >
      <v-spacer />
      <v-img :max-width="isMobile ? '100%' : 600" src="portrait.jpg" />
      <v-spacer />
    </v-row>
    <v-scroll-y-transition>
      <v-row no-gutters :class="isMobile ? 'pl-2 pr-2' : ''">
        <v-spacer />
        <v-card class="ma-0 pa-0 mt-2" width="600" color="background" elevation="0">
          <v-card-title class="ma-0 pa-0 text-h5 font-weight-light">
            <v-spacer />
            {{ $t('details_profession') }}
          </v-card-title>
          <v-card-title class="ma-0 pa-0 text-body-1 font-weight-light">
            <v-spacer />
            {{ $t('details_location') }}
          </v-card-title>
        </v-card>
        <v-spacer />
      </v-row>
    </v-scroll-y-transition>
  </v-card>
</template>

<script>

export default {
  name: 'SectionImage',

  props: {
    isMobile: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      isVisible: false
    }
  },

  computed: {
    availableLocales () {
      return this.$i18n.locales
    },
    selectedLocale: {
      get () {
        return this.$i18n.locale
      },
      set (val) {
        if (val !== this.$i18n.locale) {
          this.$i18n.setLocale(val)
        }
      }
    }
  },

  created () {
    this.$nuxt.$on('details-visible', () => {
      this.isVisible = true
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('details-visible')
  }
}
</script>
