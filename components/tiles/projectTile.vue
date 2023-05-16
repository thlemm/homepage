<template>
  <v-card
    :width="width"
    :elevation="hover ? 3 : 0"
    :color="colorTile"
    class="pt-3 pb-2 ma-3"
    :link="to"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <v-list-item v-if="!isMobile">
      <v-list-item-avatar
        tile
        :size="height"
        color="secondary"
      >
        <v-img :src="img" />
      </v-list-item-avatar>
      <v-list-item-content class="mx-0">
        <v-card-title class="title ma-0 pa-0" style="word-break: break-word;">
          {{ title }}
        </v-card-title>
        <v-card-text class="ma-0 pa-0">
          {{ text }}
        </v-card-text>
        <v-card-text class="ma-0 pa-0 mt-2">
          <v-chip
            v-for="tag in tags"
            :key="tag"
            class="mr-2 mb-1"
            :color="tag.color"
            small
          >
            {{ tag.tag }}
          </v-chip>
        </v-card-text>
      </v-list-item-content>
    </v-list-item>
    <v-container v-else>
      <v-avatar
        tile
        :size="height"
        color="secondary"
      >
        <v-img :src="img" />
      </v-avatar>
      <v-card-title class="title ma-0 pa-0" style="word-break: break-word;">
        {{ title }}
      </v-card-title>
      <v-card-text class="ma-0 pa-0">
        {{ text }}
      </v-card-text>
      <v-card-text class="ma-0 pa-0 mt-2">
        <v-chip
          v-for="tag in tags"
          :key="tag"
          class="mr-2 mb-1"
          :color="tag.color"
          small
        >
          {{ tag.tag }}
        </v-chip>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectTile',

  props: {
    width: {
      type: Number,
      required: false,
      default: 300
    },
    height: {
      type: Number,
      required: false,
      default: 300
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    colorTile: {
      type: String,
      required: true
    },
    colorText: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false,
      default: '/'
    },
    tags: {
      type: Array,
      required: true,
      default: () => { return [] }
    },
    isMobile: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {
      hover: false
    }
  }
}
</script>
