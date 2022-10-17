<template>
  <v-app>
    <v-main class="main">
      <Nuxt />
    </v-main>

    <v-footer
      color="secondary"
      padless
    >
      <v-row no-gutters align="center">
        <v-spacer></v-spacer>
        <a class="white--text text-subtitle-2 font-weight-light mr-3 mb-1" target="_self" href="/impressum">{{ $t('footer_imprint') }}</a>
        <v-spacer></v-spacer>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'default-layout',
  data() {
    return {}
  }
}
</script>

<style>
.main {
  background-color: #F2F3D9;
}
</style>
