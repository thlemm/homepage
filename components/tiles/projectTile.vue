<template>
  <v-card
    :width="width"
    :elevation="hover ? 3 : 0"
    :color="colorTile"
    class="pt-3 pb-2 ma-3"
    :to="to"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <v-list-item>
      <v-list-item-avatar
        tile
        size="100"
        color="colorTile"
      >
        <v-img :src="img" />
      </v-list-item-avatar>
      <v-list-item-content class="mx-0">
        <v-list-item-title class="title" style="word-break: break-word;">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ text }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-chip
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
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
    }
  },

  data () {
    return {
      hover: false
    }
  }
}
</script>
