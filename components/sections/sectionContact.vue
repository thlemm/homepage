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
        <contact-button
          v-for="(button, i) in buttons"
          :key="i"
          :icon="button.icon"
          :tooltip="button.tooltip"
          css-helper="ma-1"
          color="secondary"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiGithub, mdiGitlab, mdiLinkedin, mdiEmail } from '@mdi/js'
import ContactButton from '~/components/contact/contact-button'
export default {
  name: 'SectionContact',
  components: { ContactButton },
  data () {
    return {
      mdiGithub,
      mdiGitlab,
      mdiLinkedin,
      mdiEmail,
      buttons: [{
        icon: mdiGithub,
        tooltip: this.$t('contact_button_tooltip_github')
      }, {
        icon: mdiGitlab,
        tooltip: this.$t('contact_button_tooltip_gitlab')
      }, {
        icon: mdiLinkedin,
        tooltip: this.$t('contact_button_tooltip_linkedin')
      }, {
        icon: mdiEmail,
        tooltip: this.$t('contact_button_tooltip_email')
      }]
    }
  }
}
</script>
