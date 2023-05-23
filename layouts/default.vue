<template>
  <v-app>
    <v-main class="main">
      <Nuxt />
    </v-main>

    <v-footer
      height="30"
      color="secondary"
      padless
    >
      <v-row no-gutters align="center">
        <v-spacer />
        <a class="white--text text-subtitle-2 font-weight-light mr-3 mb-1"><strong><v-icon color="white" small>{{ mdiCopyright }}</v-icon> {{ $t('details_name') }} {{ new Date().getFullYear() }}</strong></a>
        <v-spacer />
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiCopyright } from '@mdi/js'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      mdiCopyright
    }
  }
}
</script>

<style>
.main {
  background-color: #F2F3D9;
}
</style>
