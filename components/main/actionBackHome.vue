<template>
  <v-row
    no-gutters
    align="start"
    justify="center"
  >
    <v-col cols="10">
      <v-btn
        text
        :to="to"
      >
        <v-icon class="mr-1">{{ mdiArrowLeft }}</v-icon>
        {{ $t('action_back_home') }}
      </v-btn>
      <v-spacer/>
    </v-col>
  </v-row>
</template>

<script>
import { mdiArrowLeft } from "@mdi/js"

export default {
  name: 'actionBackHome',

  props: {
    to: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      mdiArrowLeft
    }
  }
}
</script>
