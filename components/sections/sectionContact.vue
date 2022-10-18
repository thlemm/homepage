<template>
  <div>
    <v-card color="background" elevation="0" height="150" />
    <v-row
        align="center"
        justify="center"
        class="mb-8"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <v-btn
          class="ma-1"
          color="secondary"
          elevation="8"
          fab
          x-large
          icon
          outlined
          href=""
          target="_blank"
        >
          <v-icon>{{ mdiGithub }}</v-icon>
        </v-btn>
        <v-btn
          class="ma-1"
          color="secondary"
          elevation="8"
          fab
          x-large
          icon
          outlined
          href=""
          target="_blank"
        >
          <v-icon>{{ mdiLinkedin }}</v-icon>
        </v-btn>
        <v-btn
          class="ma-1"
          color="secondary"
          elevation="8"
          fab
          x-large
          icon
          outlined
          href=""
          target="_blank"
        >
          <v-icon>{{ mdiEmail }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiGithub, mdiLinkedin, mdiEmail } from '@mdi/js'
export default {
  name: 'sectionContact',

  data () {
    return {
      mdiGithub,
      mdiLinkedin,
      mdiEmail
    }
  }
}
</script>
